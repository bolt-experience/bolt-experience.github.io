(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30e78c60"],{3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},5596:function(t,e,n){var o,i,r;(function(n,s){i=[],o=s,r="function"===typeof o?o.apply(e,i):o,void 0===r||(t.exports=r)})(0,function(){"use strict";var t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var n=function(){var n,o;if("undefined"===typeof window)return{init:function(){}};function i(t,e){var n=this;t.style.opacity&&t.style.opacity>.05?t.style.opacity=t.style.opacity-.05:t.style.opacity&&t.style.opacity<=.1?t.parentNode&&(t.parentNode.removeChild(t),e&&e()):t.style.opacity=.9,setTimeout(function(){return i.apply(n,[t,e])},1e3/30)}var r={error:"error",warn:"warn",success:"success",info:"info"},s={container:"mini-toastr",notification:"mini-toastr__notification",title:"mini-toastr-notification__title",icon:"mini-toastr-notification__icon",message:"mini-toastr-notification__message",error:"-"+r.error,warn:"-"+r.warn,success:"-"+r.success,info:"-"+r.info};function a(e,n,o){for(var i in n=n||{},o=o||"",e)if(e.hasOwnProperty(i)){var r=e[i];r&&"object"===("undefined"===typeof r?"undefined":t(r))&&!(r instanceof Date||r instanceof RegExp)?a(r,n,o+i+" "):n[o]&&"object"===t(n[o])?n[o][i]=r:(n[o]={},n[o][i]=r)}return n}function c(t){var e=a(t),n=JSON.stringify(e,null,2);return n=n.replace(/"([^"]*)": \{/g,"$1 {").replace(/"([^"]*)"/g,"$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g,"$1: $2;").replace(/},/g,"}\n").replace(/ &([.:])/g,"$1"),n=n.substr(1,n.lastIndexOf("}")-1),n}function l(t){var e=document.head||document.getElementsByTagName("head")[0],n=p("style");n.id="mini-toastr-styles",n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),e.appendChild(n)}var u={types:r,animation:i,timeout:3e3,icons:{},appendTarget:document.body,node:p(),style:(o={},e(o,"."+s.container,{position:"fixed","z-index":99999,right:"12px",top:"12px"}),e(o,"."+s.notification,(n={cursor:"pointer",padding:"12px 18px",margin:"0 0 6px 0","background-color":"#000",opacity:.8,color:"#fff","border-radius":"3px","box-shadow":"#3c3b3b 0 0 12px",width:"300px"},e(n,"&."+s.error,{"background-color":"#D5122B"}),e(n,"&."+s.warn,{"background-color":"#F5AA1E"}),e(n,"&."+s.success,{"background-color":"#7AC13E"}),e(n,"&."+s.info,{"background-color":"#4196E1"}),e(n,"&:hover",{opacity:1,"box-shadow":"#000 0 0 12px"}),n)),e(o,"."+s.title,{"font-weight":"500"}),e(o,"."+s.message,{display:"inline-block","vertical-align":"middle",width:"240px",padding:"0 12px"}),o)};function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(t)}function d(t,e,n){var o=p(n.icons[e].nodeType),i=n.icons[e].attrs;for(var r in i)i.hasOwnProperty(r)&&o.setAttribute(r,i[r]);t.appendChild(o)}function f(t,e,n){var o=p();o.className=n,o.appendChild(document.createTextNode(e)),t.appendChild(o)}var m={config:u,showMessage:function(t,e,n,o,i,r){var a={};Object.assign(a,this.config),Object.assign(a,r);var c=p();return c.className=s.notification+" "+s[n],c.onclick=function(){a.animation(c,null)},e&&f(c,e,s.title),a.icons[n]&&d(c,n,a),t&&f(c,t,s.message),a.node.insertBefore(c,a.node.firstChild),setTimeout(function(){return a.animation(c,i)},o||a.timeout),i&&i(),this},init:function(t){var e=this,n={};Object.assign(n,u),Object.assign(n,t),this.config=n;var o=c(n.style);return l(o),n.node.id=""+s.container,n.node.className=""+s.container,n.appendTarget.appendChild(n.node),Object.keys(n.types).forEach(function(t){m[n.types[t]]=function(e,o,i,r,s){return this.showMessage(e,o,n.types[t],i,r,s),this}.bind(e)}),this},setIcon:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"i",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];n["class"]=n["class"]?n["class"]+" "+s.icon:s.icon,this.config.icons[t]={nodeType:e,attrs:n}}};return m}();return n})},"6b54":function(t,e,n){"use strict";n("3846");var o=n("cb7c"),i=n("0bfb"),r=n("9e1e"),s="toString",a=/./[s],c=function(t){n("2aba")(RegExp.prototype,s,t,!0)};n("79e5")(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?c(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)}):a.name!=s&&c(function(){return a.call(this)})},"813b":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animated slideInLeft",staticStyle:{"animation-duration":"100ms"}},[n("div",{staticClass:"app flex-row align-items-center"},[n("div",{staticClass:"container"},[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{md:"8"}},[n("b-card-group",[n("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[n("b-card-body",[n("AppHeaderDropdown",{staticStyle:{"list-style":"none !important"}},[n("template",{slot:"header"},[n("i",{staticClass:"fa fa-language fa-lg "})]),n("template",{slot:"dropdown"},[n("div",{staticClass:"dropdown-menu-lg"},t._l(t.$ml.list,function(e){return n("b-dropdown-item",{key:e},[n("div",{staticClass:"message"},[n("div",{staticClass:"text-truncate font-weight-bold",domProps:{textContent:t._s(e)},on:{click:function(n){return t.$ml.change(e)}}})])])}),1)])],2),n("b-form",{attrs:{action:"dashboard"},on:{submit:function(e){return e.preventDefault(),t.sendData(e)}}},[n("h1",{domProps:{textContent:t._s(t.$ml.get("login"))}}),n("p",{staticClass:"text-muted",domProps:{textContent:t._s(t.$ml.get("signin"))}}),n("b-input-group",{staticClass:"mb-3"},[n("b-input-group-prepend",[n("b-input-group-text",[n("i",{staticClass:"icon-user"})])],1),n("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:t.$ml.get("username"),autocomplete:"username email",required:""},model:{value:t.login_details.user_name,callback:function(e){t.$set(t.login_details,"user_name",e)},expression:"login_details.user_name"}})],1),n("b-input-group",{staticClass:"mb-4"},[n("b-input-group-prepend",[n("b-input-group-text",[n("i",{staticClass:"icon-lock"})])],1),n("b-form-input",{staticClass:"form-control",attrs:{type:"password",placeholder:t.$ml.get("password"),autocomplete:"current-password",required:""},model:{value:t.login_details.password,callback:function(e){t.$set(t.login_details,"password",e)},expression:"login_details.password"}})],1),n("b-row",[n("b-col",{attrs:{cols:"6"}},[n("b-button",{staticClass:"px-4",attrs:{type:"submit",variant:"primary"},domProps:{textContent:t._s(t.$ml.get("login"))}})],1),n("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[n("b-button",{staticClass:"px-0",attrs:{variant:"link"},domProps:{textContent:t._s(t.$ml.get("forgotpassword"))}})],1)],1)],1)],1)],1),n("b-card",{staticClass:"text-white bg-primary py-5 d-md-down-none",staticStyle:{width:"44%"},attrs:{"no-body":""}},[n("b-card-body",{staticClass:"text-center"},[n("div",[n("h2",[t._v("Sign up")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),n("b-button",{staticClass:"active mt-3",attrs:{variant:"primary"}},[t._v("Register Now!")])],1)])],1)],1)],1)],1)],1)])])},i=[],r=(n("6b54"),n("6762"),n("2fdb"),n("96cf"),n("3b8d")),s=n("bc3a"),a=n.n(s),c=n("789a"),l=n("e19c"),u=(n("4767"),n("f1fb")),p=n("a026"),d=n("e440"),f=n.n(d),m=n("5596"),g=n.n(m),b={success:"success",error:"error",info:"info",warn:"warn"};function y(t){var e=t.title,n=t.message,o=t.type,i=t.timeout,r=t.cb;return g.a[o](n,e,i,r)}g.a.init({types:b});var h={success:y,error:y,info:y,warn:y};p["default"].use(f.a,h);var v={name:"SuperUserLogin",components:{AppHeaderDropdown:u["f"]},data:function(){return{login_details:{user_name:"",password:""},response:[]}},methods:{sendData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a.a.post("".concat(l["b"])+"auth/super/login/",this.login_details,{withCredentials:!0}).then(function(t){if(e.response=t,c["a"].login(),t.data.auth){var n=t.data.user;e.$session.set("user",t.data.user),localStorage.setItem("session_key",JSON.stringify(n))}else{console.log(t.data),e.$session.set("Subuser",t.data);n=e.$session.get("Subuser");localStorage.setItem("session_key",JSON.stringify(n))}e.$router.push(e.$route.query.redirect||"/dashboard")}).catch(function(t){t.toString().includes("401")?y({type:f.a.types.error,title:"Login Error",message:"Wrong Username or Password"}):y({type:f.a.types.error,title:"Network Error"})});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},w=v,x=n("2877"),C=Object(x["a"])(w,o,i,!1,null,null,null);e["default"]=C.exports},e440:function(t,e,n){var o,i,r;(function(n,s){i=[],o=s,r="function"===typeof o?o.apply(e,i):o,void 0===r||(t.exports=r)})(0,function(){"use strict";function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var e="VueNotifications",n="vue-notifications",o="notifications",i={error:"error",warn:"warn",info:"info",success:"success"},r=1,s={alreadyInstalled:e+": plugin already installed",methodNameConflict:e+": names conflict - "};function a(t){var e=t.version.match(/(\d+)/g);return+e[0]}function c(t){var e=t.type,n=t.message,o=t.title,r="Title: "+o+", Message: "+n+", Type: "+e;e===i.error?console.error(r):e===i.warn?console.warn(r):console.log(r)}function l(t,e){var n={};return Object.keys(e).forEach(function(o){n[o]="cb"===o?e[o].bind(t):"function"===typeof e[o]?e[o].call(t):e[o]}),n}function u(t,e){var n=l(e,t),o=y.pluginOptions[n.type],i=o?y.pluginOptions[n.type]:c;if(i(n,e),t.cb)return t.cb()}function p(t,e){Object.keys(e).forEach(function(n){t[e[n]]=function(t){return t.type=e[n],u(t)}})}function d(t,e,n,o){n.methods||(n.methods={}),n.methods[e]||(n.methods[e]=f(t,e,n,o))}function f(t,e,n,o){return function(i){var r=Object.assign({},y.config,n[y.propertyName][e],i);return u(r,o,t)}}function m(t,e,o){e&&(Object.keys(e).forEach(function(e){return d(t,e,t.$options,o)}),t.$emit(n+"-initiated"))}function g(t,e){if(e){var o=t.$options.methods;Object.keys(e).forEach(function(t){o[t]&&(o[t]=void 0,delete o[t])}),t.$emit(n+"-unlinked")}}function b(e,n){var o,i=a(e)===r?"init":"beforeCreate";return o={},t(o,i,function(){var t=this.$options[y.propertyName];m(this,t,n)}),t(o,"beforeDestroy",function(){var t=this.$options[y.propertyName];g(this,t)}),o}var y={types:i,propertyName:o,config:{type:i.info,timeout:3e3},pluginOptions:{},installed:!1,install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.installed)throw console.error(s.alreadyInstalled);var n=b(t,e);t.mixin(n),this.setPluginOptions(e),p(this,this.types),this.installed=!0},setPluginOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pluginOptions=t}};return"undefined"!==typeof window&&window.Vue&&window.Vue.use(y),y})}}]);
//# sourceMappingURL=chunk-30e78c60.744cff41.js.map