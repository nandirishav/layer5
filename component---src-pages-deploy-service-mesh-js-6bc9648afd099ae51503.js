(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"+eYb":function(e,n,t){e.exports=t.p+"static/book-cover-9a2c56c6c1b2a81bd7db678626f15607.png"},"2SVd":function(e,n,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,n,t){"use strict";e.exports=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}},"9rSQ":function(e,n,t){"use strict";var r=t("xTJ+");function a(){this.handlers=[]}a.prototype.use=function(e,n){return this.handlers.push({fulfilled:e,rejected:n}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(n){null!==n&&e(n)}))},e.exports=a},CgaS:function(e,n,t){"use strict";var r=t("xTJ+"),a=t("MLWZ"),o=t("9rSQ"),i=t("UnBK"),s=t("SntB");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=[i,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){n.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){n.push(e.fulfilled,e.rejected)}));n.length;)t=t.then(n.shift(),n.shift());return t},c.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(n,t){return this.request(s(t||{},{method:e,url:n,data:(t||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(n,t,r){return this.request(s(r||{},{method:e,url:n,data:t}))}})),e.exports=c},DfZB:function(e,n,t){"use strict";e.exports=function(e){return function(n){return e.apply(null,n)}}},HSsa:function(e,n,t){"use strict";e.exports=function(e,n){return function(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];return e.apply(n,t)}}},JEQr:function(e,n,t){"use strict";(function(n){var r=t("xTJ+"),a=t("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,n){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(s=t("tQ2B")),s),transformRequest:[function(e,n){return a(n,"Accept"),a(n,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(n){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,t("8oxB"))},LYNF:function(e,n,t){"use strict";var r=t("OH9c");e.exports=function(e,n,t,a,o){var i=new Error(e);return r(i,n,t,a,o)}},Lmem:function(e,n,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,n,t){"use strict";var r=t("xTJ+");function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,n,t){if(!n)return e;var o;if(t)o=t(n);else if(r.isURLSearchParams(n))o=n.toString();else{var i=[];r.forEach(n,(function(e,n){null!=e&&(r.isArray(e)?n+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(a(n)+"="+a(e))})))})),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},OH9c:function(e,n,t){"use strict";e.exports=function(e,n,t,r,a){return e.config=n,t&&(e.code=t),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function a(e){var r=e;return n&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=a(window.location.href),function(n){var t=r.isString(n)?a(n):n;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},"Rn+g":function(e,n,t){"use strict";var r=t("LYNF");e.exports=function(e,n,t){var a=t.config.validateStatus;t.status&&a&&!a(t.status)?n(r("Request failed with status code "+t.status,t.config,null,t.request,t)):e(t)}},SntB:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=function(e,n){n=n||{};var t={},a=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,n){return r.isPlainObject(e)&&r.isPlainObject(n)?r.merge(e,n):r.isPlainObject(n)?r.merge({},n):r.isArray(n)?n.slice():n}function l(a){r.isUndefined(n[a])?r.isUndefined(e[a])||(t[a]=c(void 0,e[a])):t[a]=c(e[a],n[a])}r.forEach(a,(function(e){r.isUndefined(n[e])||(t[e]=c(void 0,n[e]))})),r.forEach(o,l),r.forEach(i,(function(a){r.isUndefined(n[a])?r.isUndefined(e[a])||(t[a]=c(void 0,e[a])):t[a]=c(void 0,n[a])})),r.forEach(s,(function(r){r in n?t[r]=c(e[r],n[r]):r in e&&(t[r]=c(void 0,e[r]))}));var u=a.concat(o).concat(i).concat(s),d=Object.keys(e).concat(Object.keys(n)).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(d,l),t}},UnBK:function(e,n,t){"use strict";var r=t("xTJ+"),a=t("xAGQ"),o=t("Lmem"),i=t("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(n){delete e.headers[n]})),(e.adapter||i.adapter)(e).then((function(n){return s(e),n.data=a(n.data,n.headers,e.transformResponse),n}),(function(n){return o(n)||(s(e),n&&n.response&&(n.response.data=a(n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)}))}},XwJu:function(e,n,t){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},endd:function(e,n,t){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,n,t,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(n)),r.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,n,t){"use strict";var r=t("2SVd"),a=t("5oMp");e.exports=function(e,n){return e&&!r(n)?a(e,n):n}},"jfS+":function(e,n,t){"use strict";var r=t("endd");function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var t=this;e((function(e){t.reason||(t.reason=new r(e),n(t.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(n){e=n})),cancel:e}},e.exports=a},tQ2B:function(e,n,t){"use strict";var r=t("xTJ+"),a=t("Rn+g"),o=t("eqyj"),i=t("MLWZ"),s=t("g7np"),c=t("w0Vi"),l=t("OTTw"),u=t("LYNF");e.exports=function(e){return new Promise((function(n,t){var d=e.data,p=e.headers;r.isFormData(d)&&delete p["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+h)}var g=s(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:r,config:e,request:f};a(n,t,o),f=null}},f.onabort=function(){f&&(t(u("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){t(u("Network Error",e,null,f)),f=null},f.ontimeout=function(){var n="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(n=e.timeoutErrorMessage),t(u(n,e,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||l(g))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}if("setRequestHeader"in f&&r.forEach(p,(function(e,n){void 0===d&&"content-type"===n.toLowerCase()?delete p[n]:f.setRequestHeader(n,e)})),r.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(x){if("json"!==e.responseType)throw x}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),t(e),f=null)})),d||(d=null),f.send(d)}))}},vDqi:function(e,n,t){e.exports=t("zuR4")},"w/i+":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),o=t("vOnD"),i=t("Bl7J"),s=t("vrFN"),c=t("mvsK"),l=t("iJo/"),u=t("DZth"),d=t("WL7g"),p=t("zLVn"),f=t("vDqi"),m=t.n(f),h=t("+eYb"),g=t.n(h),b=o.d.div.withConfig({displayName:"DeployServiceMeshstyle__DeployServiceMeshWrapper",componentId:"sc-1lytq5m-0"})(["   \n    html {\n        scroll-behavior: smooth;\n    }\n    h3.sub-heading {\n        margin-top: 2rem;\n        color: ",';\n    }\n    #hero{\n        background-color: #EBC017;\n        height: 35rem;\n        text-align: center;\n        padding: 200px 0px 10px 0px;\n        p{\n            padding-top: 20px; \n        }\n    }\n    #info{\n        padding: 70px 0px 70px 0px;\n        h3{\n            font-weight: 650;\n        }\n        h4{\n            font-weight: 600;\n            padding-bottom: 15px;\n        }\n        p{\n            color: #737373;\n            font-size: 1.2em;\n            padding-right: 20px\n        }\n        .button{\n            text-align: center;\n            padding-top:  20px;\n        }\n    }\n    \n    #arrow{\n        margin: auto;\n        width: auto;\n        padding: 20px;\n        min-height: 400px;\n        margin: 3rem 13%;\n        border-radius: 50px;\n        background-color: #000000;\n        h2{\n            padding-top: 40px;\n            color: white;\n            font-size: 2.5em;\n            font-weight: 700;\n            text-align: center;\n        }\n        #text{\n            color: white;\n            display: flex; \n            padding: 30px 40px 0px 40px;\n            #right{\n                margin-left: auto;\n            }\n            p{\n                padding: 0px 20px 0px 20px;\n                font-size: 1.2em;\n            }\n        }\n        #arrow-box{\n            \n            padding: 0px 40px 20px 40px;\n            display: flex;\n            .arrow-left {\n                // width: 90%;\n                height: 0;\n                padding-top: 1.3em;\n                padding-bottom: 25%;\n                padding-left:20px;\n                position: relative;\n                overflow: hidden;\n            }\n            .arrow-left:after {\n                content: "";\n                display: block;\n                width: 0; \n                height: 0; \n                border-top: 4em solid transparent;\n                border-bottom: 4em solid transparent; \n                border-right: 6em solid #00B39F;\n            }\n            .arrow-right {\n                margin-left: auto;\n                // width: 10%;\n                height: 0;\n                padding-top: 1.3em;\n                padding-bottom: 20%;\n                padding-right: 75px;\n                position: relative;\n                overflow: hidden;\n            }\n            .arrow-right:after {\n                content: "";\n                display: block;\n                width: 0; \n                height: 0; \n                border-top: 4em solid transparent;\n                border-bottom: 4em solid transparent;\n                border-left: 8em solid #00B39F;\n            } \n            @media only screen and (min-width: 1000px) {\n                \n                .arrow-left:after {\n                    \n                    border-right: 60em solid #00B39F;\n                }\n    \n                .arrow-right {\n                    padding-top: 1.3em;\n                }\n            }\n            @media only screen and (max-width: 1000px) {\n                \n                .arrow-left:after {\n                    \n                    border-right: 60em solid #00B39F;\n                }\n    \n                .arrow-right {\n                    padding-top: 2.1em;   \n                }\n                .arrow-right:after {\n                    border-top: 1.4em solid transparent;\n                    border-bottom: 1.4em solid transparent;\n                    border-left: 5em solid #00B39F;\n                }\n            }\n            @media only screen and (max-width: 600px) {\n                \n                .arrow-left:after {\n                    \n                    border-right: 60em solid #00B39F;\n                }\n    \n                .arrow-right {\n                    padding-top: 2.6em;   \n                }\n                .arrow-right:after {\n                    border-top: 1.0em solid transparent;\n                    border-bottom: 1.0em solid transparent;\n                    border-left: 2.4em solid #00B39F;\n                }\n            }\n            @media only screen and (max-width: 400px) {\n                \n                .arrow-left:after {\n                    \n                    border-right: 60em solid #00B39F;\n                }\n    \n                .arrow-right {\n                    padding-top: 3.1em;   \n                }\n                .arrow-right:after {\n                    border-top: 0.4em solid transparent;\n                    border-bottom: 0.4em solid transparent;\n                    border-left: 1.4em solid #00B39F;\n                }\n            }\n        }\n    }\n    #form{\n        h3{\n            font-weight: 700;\n        }\n        #submit-btn{\n            text-align: center;\n            padding:  20px 0px 100px 0px;\n         }\n        #text{\n            color: black;\n            display: flex; \n            padding: 30px 60px 20px 150px;\n            p{\n                font-weight: 600;\n            }\n            #right{\n                padding-left: 10px;\n                margin-left: auto;\n            }\n        }\n        #slider{\n            display: flex;\n            padding: 40px\n            h4{\n                font-size: 16px;\n                font-weight: 700;\n                width: 150px;\n            }\n            // #slide{\n            //     margin: 60px 0 0 0%;\n            //     width: 100%;\n            // }\n        }\n    }\n    .slidecontainer {\n        width: 100%;\n        position: absolute;\n        margin: 0 auto;\n      }\n      \n      @media screen and (-webkit-min-device-pixel-ratio:0) {\n        input[type=\'range\'] {\n            -webkit-appearance: none;\n            background-color: #D2CECC;\n            -webkit-appearance: none;\n            -moz-apperance: none;\n            border-radius: 6px;\n            height: 6px;  \n        }\n        .bubble {\n            background: red;\n            color: white;\n            padding: 4px 12px;\n            position: absolute;\n            border-radius: 4px;\n            left: 50%;\n            transform: translateX(-50%);\n            font-size: 5px;\n          }\n          .bubble::after {\n            content: "";\n            position: absolute;\n            width: 2px;\n            height: 2px;\n            background: red;\n            top: -1px;\n            left: 50%;\n          }\n      .slider {\n        -webkit-appearance: none;\n        width: 100%;\n        height: 10px;\n        border-radius: 5px;\n        background: #d3d3d3;\n        outline: none;\n        opacity: 0.7;\n        -webkit-transition: .2s;\n        transition: opacity .2s;\n        // overflow: hidden;\n        cursor: pointer;\n      }\n      \n      .slider:hover {\n        opacity: 1;\n      }\n      \n      .slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n        border:5px solid #00B39F;\n        // box-shadow: -100vw 0 0 100vw dodgerblue;\n        background: #FFFFFF;\n        cursor: pointer;\n      }\n      \n      .slider::-moz-range-thumb {\n        width: 25px;\n        height: 25px;\n        border-radius: 50%;\n        background: #4CAF50;\n        cursor: pointer;\n      }\n      #additional{\n          position: relative;\n      }\n      #submit{\n          text-align: center;\n          padding: 150px 0px 200px 0px;\n          background-color: rgba(228, 231, 237, 0.8);\n          position:absolute;\n          left: 0;\n        right: 0;\n        margin: auto\n          border-radius: 25px;\n          z-index: 3000;\n        width: 100%;\n        height: 90%;\n        \n          h2{\n              font-weight: 700;\n              padding: 0px 0px 20px 0px;\n          }\n          .email{\n              width: 200px;\n              height: 48px;\n              padding: 15px;\n              margin: 5px;\n              border-radius: 5px;\n              font-size: 15px;\n          }\n          #arrow-btn{\n              width: 60px;\n          }\n      }\n      \n      #bot{\n          /*\n        switch this section to React Row, Col\n        */\n        display: flex;\n          #green{\n              background: #00B39F;\n              \n              min-height: 400px;\n              width: 60%;\n              #text{\n                  color: white;\n                  \n                  padding: 120px 70px 120px 150px;\n                  #cover{\n                      border: 2px solid white;\n                      width: 240px;\n                      padding: 10px;\n                      text-align: center;\n                  }\n                  h1{\n                      color: white;\n                  }\n                  #learn{\n                      color: white;\n                  }\n              }\n          }\n          /*\n        switch this section to React Row, Col\n        */\n          #book{\n            /* background-image: url(',"); */\n            background-repeat: no-repeat;\n            /* background-attachment: fixed; */\n            background-position: center;\n            /* min-height: 800px; */\n            vertical-align: center;\n            background-size: contain;\n            \n            #spacer{\n                minwidth: 850px;\n                vertical-align: center;\n            }\n          }\n      }\n      .tooltip {\n        position: relative;\n        display: inline-block;\n      }\n      \n      .tooltip .tooltiptext {\n        visibility: hidden;\n        \n        background-color: black;\n        color: #fff;\n        text-align: center;\n        border-radius: 6px;\n        padding: 5px 0;\n        font-size: 1rem;\n        \n        /* Position the tooltip */\n        position: absolute;\n        z-index: 1;\n        bottom: 100%;\n        left: 50%;\n        padding: 1rem;\n        margin-left: -140px;\n        width: 12.5rem;\n        font-size: .9125rem;\n        line-height: 1.25rem;\n        text-align: center;\n        width: 300px;\n        color: ",";\n        background: ",";\n        z-index: 3000;\n        border-bottom-right-radius: 0.8rem;\n        border-bottom-left-radius: 0.8rem;\n        transition: all 0.5s ease;\n        p {\n            margin: 0;\n        }\n        &:hover {\n            cursor: default;\n            .tooltiptext {\n                transform: translateY(-0.5rem);\n            }\n        }\n      }\n      \n      .tooltip:hover .tooltiptext {\n        visibility: visible;\n      }\n"],(function(e){return e.theme.white}),g.a,(function(e){return e.theme.white}),(function(e){return e.theme.tertiaryColor})),x=t("xFQ1"),v=t("+T6m"),y=Object(r.memo)((function(e){e.classes;var n,t=e.label,o=e.onChange,i=e.value,s=Object(p.a)(e,["classes","label","onChange","value"]),c=Object(r.useState)(0),l=c[0],u=c[1],d=Object(r.useState)(null),f=d[0],m=d[1];Object(r.useEffect)((function(){u(i)}),[i]);var h={backgroundImage:"-webkit-gradient(linear,left top,right top,color-stop("+l/100+", #0098A6),color-stop("+l/100+", #D2CECC))"},g={left:"calc("+l+"%)"};return Object(r.useEffect)((function(){"up"===f&&o(l)}),[f]),a.a.createElement("div",{className:"slidecontainer tooltip"},a.a.createElement("input",Object.assign({type:"range",value:l},s,{className:"slider",id:"myRange",style:h,onChange:function(e){u(e.target.value)},onMouseDown:function(){return m("down")},onMouseUp:function(){return m("up")}})),a.a.createElement("span",((n={className:"bubble",style:g}).className="tooltiptext",n),t))})),w=function(){var e=Object(r.useState)(50),n=e[0],t=e[1],o=Object(r.useState)(50),i=o[0],s=o[1],c=Object(r.useState)(50),l=c[0],u=c[1],d=Object(r.useState)(50),p=d[0],f=d[1],h=Object(r.useState)(50),w=h[0],E=h[1],S=Object(r.useState)(50),C=S[0],O=S[1],k=Object(r.useState)(50),j=k[0],N=k[1],T=Object(r.useState)(50),B=T[0],A=T[1],R=Object(r.useState)(""),F=R[0],L=R[1],q=Object(r.useState)(!1),D=q[0],U=q[1],z=Object(r.useState)(!1),P=z[0],M=z[1],J=Object(r.useState)(""),I=J[0],V=J[1],H=Object(r.useState)(""),Q=H[0],W=H[1],_=Object(r.useState)(""),K=_[0],X=_[1],Y=function(){U(!0)},Z=Object(r.useMemo)((function(){return{min:0,max:100,value:n,step:2,label:"The higher volume of service requests that you have to internal and external services there are, the more insight and control you will need and the higher the return on investment your service mesh will deliver.",onChange:function(e){t(e)}}}),[n]),$=Object(r.useMemo)((function(){return{min:0,max:100,value:i,step:2,label:"Edge focus—metrics and usage are for response time to clients and request failure rates.",onChange:function(e){s(e)}}}),[i]),G=Object(r.useMemo)((function(){return{min:0,max:100,value:l,step:2,label:"Strong separation of external and internal users. Focused on external API experience. APIs are used primarily for client-facing interaction.APIs are for clients only.",onChange:function(e){u(e)}}}),[l]),ee=Object(r.useMemo)((function(){return{min:0,max:100,value:p,step:2,label:"The security characteristics are desirable qualities of any deployment. Apply defense-in-depth. Why not pull these into a single layer of control?",onChange:function(e){f(e)}}}),[p]),ne=Object(r.useMemo)((function(){return{min:0,max:100,value:w,step:2,label:"Deploy a service mesh early. Doing so lowers risk and affords you time to become confident with the operations of a service mesh.",onChange:function(e){E(e)}}}),[w]),te=Object(r.useMemo)((function(){return{min:0,max:100,value:C,step:2,label:"Resilient infrastructure and highly available services are ideal in any environment. Let the service mesh do the heavy lifting for you.",onChange:function(e){O(e)}}}),[C]),re=Object(r.useMemo)((function(){return{min:0,max:100,value:j,step:2,label:"a very small (<5 engineer) team",onChange:function(e){N(e)}}}),[j]),ae=Object(r.useMemo)((function(){return{min:0,max:100,value:B,step:2,label:"Whether your environment is polyglot or not, service mesh instrumentation delivers uniformity, decouples Dev and Ops, and melts infrastructure concern off of application code.",onChange:function(e){A(e)}}}),[B]);return a.a.createElement(b,null,a.a.createElement("div",{id:"hero"},a.a.createElement("h1",null,'"When should I deploy a service mesh?"'),a.a.createElement("h3",{className:"sub-heading"},"the adopter's dilemma")),a.a.createElement("div",{id:"info"},a.a.createElement(x.b,null,a.a.createElement(x.c,null,a.a.createElement(x.a,{sm:12,md:6,lg:4},a.a.createElement("h3",null,"Factors of your service mesh's functionality")),a.a.createElement(x.a,{sm:12,md:6,lg:4},a.a.createElement("h4",null,"it depends..."),a.a.createElement("p",null,"At this point, you might be thinking, “I have a container orchestrator. Why do I need another infrastructure layer?” ")),a.a.createElement(x.a,{sm:12,md:6,lg:4},a.a.createElement("h4",null,"Service-level needs"),a.a.createElement("p",null,"With microservices and containers mainstreaming, container orchestrators provide much of what the cluster (nodes and containers) need."))),a.a.createElement("div",{className:"button"},a.a.createElement(v.a,{secondary:!0,url:"#form",title:"Take The Full Questionaire"})))),a.a.createElement("div",{id:"arrow"},a.a.createElement("h2",null,"How Strongly to Consider a Service Mesh"),a.a.createElement("div",{id:"text"},a.a.createElement("p",{id:"left"},"Lightly"),a.a.createElement("p",{id:"right"},"Strongly")),a.a.createElement("div",{id:"arrow-box"},a.a.createElement("div",{className:"arrow-left"}),a.a.createElement("div",{className:"arrow-right"}))),a.a.createElement("div",{id:"info"},a.a.createElement(x.b,null,a.a.createElement(x.c,null,a.a.createElement(x.a,{sm:12,md:6,lg:4},a.a.createElement("h3",null,"Factors of your enviroment and workloads")),a.a.createElement(x.a,{sm:12,md:6,lg:4},a.a.createElement("h4",null,"Service communication"),a.a.createElement("p",null,"The higher volume of service requests that you have to internal and external services there are, the more insight and control you will need and the higher the return on investment your service mesh will deliver.")),a.a.createElement(x.a,{sm:12,md:6,lg:4},a.a.createElement("h4",null,"Observability"),a.a.createElement("p",null,"Edge focus—metrics and usage are for response time to clients and request failure rates."))),a.a.createElement("div",{className:"button"},a.a.createElement(v.a,{secondary:!0,url:"#form",title:"Take The Full Questionaire"})))),a.a.createElement("div",{id:"form"},a.a.createElement(x.b,null,a.a.createElement("div",{id:"text"},a.a.createElement("p",{id:"left"},"Lightly"),a.a.createElement("p",{id:"right"},"Strongly")),a.a.createElement("div",null,a.a.createElement("div",{className:"range-slider"},a.a.createElement("div",{id:"slider"},a.a.createElement("h4",null,"Interservice Communication"),a.a.createElement(y,Z)),a.a.createElement("div",{id:"slider"},a.a.createElement("h4",null,"Observability"),a.a.createElement(y,$)),a.a.createElement("div",{id:"slider"},a.a.createElement("h4",null,"Perspective from which you think of your APIs"),a.a.createElement(y,G)))))),a.a.createElement(x.b,null,a.a.createElement("div",{id:"form"},a.a.createElement("div",{id:"additional"},!D&&a.a.createElement("div",{id:"submit"},a.a.createElement("h2",null,"Complete the survey and receive ",a.a.createElement("br",null),"an in-depth analysis"),a.a.createElement("input",{type:"text",className:"email",onChange:function(e){V(e.target.value)},placeholder:"First Name"}),a.a.createElement("br",null),a.a.createElement("input",{type:"text",className:"email",onChange:function(e){W(e.target.value)},placeholder:"Second Name"}),a.a.createElement("br",null),a.a.createElement("input",{type:"text",className:"email",onChange:function(e){X(e.target.value)},placeholder:"Organization or Company"}),a.a.createElement("br",null),a.a.createElement("input",{type:"email",className:"email",onKeyDown:function(e){"Enter"===e.key&&Y()},onChange:function(e){L(e.target.value)},placeholder:"Email Address"}),a.a.createElement(v.a,{secondary:!0,id:"arrow-btn",type:"button",onClick:Y,title:"Continue →"})),a.a.createElement("div",{className:"range-slider"},a.a.createElement("div",{id:"slider"},a.a.createElement("h4",null,"Security Model"),a.a.createElement(y,ee)),a.a.createElement("div",{id:"slider"},a.a.createElement("h4",null,"# of services"),a.a.createElement(y,ne)),a.a.createElement("div",{id:"slider"},a.a.createElement("h4",null,"Service reliability"),a.a.createElement(y,te)),a.a.createElement("div",{id:"slider"},a.a.createElement("h4",null,"Size of your organization"),a.a.createElement(y,re)),a.a.createElement("div",{id:"slider"},a.a.createElement("h4",null,"Diversity of application stack"),a.a.createElement(y,ae))),a.a.createElement("div",{id:"submit-btn"},!P&&a.a.createElement(v.a,{secondary:!0,type:"button",onClick:function(){M(!0),m.a.post("https://hook.integromat.com/ndmru0l21n51mcw4dsbhc48xg1mzh1v5",{parentVal1:n,parentVal2:i,parentVal3:l,parentVal4:p,parentVal5:w,parentVal6:C,parentVal7:j,parentVal8:B,email:F,first:I,second:Q,org:K})},title:"Submit →"}),P&&a.a.createElement("h3",null,"Your response has been recorded!"))))),a.a.createElement("div",{id:"bot"},a.a.createElement("div",{id:"green"},a.a.createElement("div",{id:"text"},a.a.createElement("p",{id:"cover"},"Services-first Network"),a.a.createElement("h1",null,"What is A ",a.a.createElement("br",null)," Service Mesh?"),a.a.createElement("p",null,"Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology."),a.a.createElement(v.a,{primary:!0,id:"learn",type:"button",title:"Learn More"}))),a.a.createElement("div",{id:"book"},a.a.createElement("div",{id:"spacer"},a.a.createElement("img",{src:g.a})))))};n.default=function(){return a.a.createElement(o.a,{theme:d.a},a.a.createElement(u.a,null),a.a.createElement(s.a,{title:"when should i deploy service mesh",description:"when should i deploy service mesh question form."}),a.a.createElement(i.a,null,a.a.createElement(c.a,null),a.a.createElement(w,null),a.a.createElement(l.a,null)))}},w0Vi:function(e,n,t){"use strict";var r=t("xTJ+"),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var n,t,o,i={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),n=r.trim(e.substr(0,o)).toLowerCase(),t=r.trim(e.substr(o+1)),n){if(i[n]&&a.indexOf(n)>=0)return;i[n]="set-cookie"===n?(i[n]?i[n]:[]).concat([t]):i[n]?i[n]+", "+t:t}})),i):i}},xAGQ:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=function(e,n,t){return r.forEach(t,(function(t){e=t(e,n)})),e}},"xTJ+":function(e,n,t){"use strict";var r=t("HSsa"),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==a.call(e))return!1;var n=Object.getPrototypeOf(e);return null===n||n===Object.prototype}function l(e){return"[object Function]"===a.call(e)}function u(e,n){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:l,isStream:function(e){return s(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var n={};function t(t,r){c(n[r])&&c(t)?n[r]=e(n[r],t):c(t)?n[r]=e({},t):o(t)?n[r]=t.slice():n[r]=t}for(var r=0,a=arguments.length;r<a;r++)u(arguments[r],t);return n},extend:function(e,n,t){return u(n,(function(n,a){e[a]=t&&"function"==typeof n?r(n,t):n})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},yK9s:function(e,n,t){"use strict";var r=t("xTJ+");e.exports=function(e,n){r.forEach(e,(function(t,r){r!==n&&r.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[r])}))}},zuR4:function(e,n,t){"use strict";var r=t("xTJ+"),a=t("HSsa"),o=t("CgaS"),i=t("SntB");function s(e){var n=new o(e),t=a(o.prototype.request,n);return r.extend(t,o.prototype,n),r.extend(t,n),t}var c=s(t("JEQr"));c.Axios=o,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=t("endd"),c.CancelToken=t("jfS+"),c.isCancel=t("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=t("DfZB"),c.isAxiosError=t("XwJu"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=component---src-pages-deploy-service-mesh-js-6bc9648afd099ae51503.js.map