(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2b0b886"],{"0521":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"animated slideInLeft",staticStyle:{"animation-duration":"100ms"}},[n("div",{staticClass:"col-lg-15 control-section",attrs:{id:"target"}},[n("div",{staticClass:"content-wrapper"},[n("ejs-toolbar",{attrs:{id:"toolbargrid2",clicked:e.addEditHandler}},[n("e-items",[n("e-item",{attrs:{align:"right",id:"add",template:e.addTemplate,text:e.$ml.get("add")}}),n("e-item",{attrs:{align:"right",id:"delete",template:e.deleteTemplate,text:e.$ml.get("delete")}})],1)],1),n("div",{staticClass:"control-section"},[n("ejs-grid",{ref:"studentgrid",attrs:{id:"studentgrid",showColumnChooser:!0,rowHeight:e.rowHeight,allowResizing:!0,allowPdfExport:!0,height:e.height,allowReordering:!0,allowExcelExport:!0,enableVirtualization:!0,dataSource:e.students,allowFiltering:!0,filterSettings:e.filterOptions,allowTextWraping:!0,allowSelection:!0,allowSorting:!0,actionBegin:e.actionBegin,toolbarClick:e.clickHandler,recordDoubleClick:e.editStudent,toolbar:e.toolbar,enableHover:!1}},[n("e-columns",[n("e-column",{attrs:{field:"user_name",headerText:"UserName"}}),n("e-column",{attrs:{field:"personal_details.name",headerText:"Name"}}),n("e-column",{attrs:{field:"personal_details.email",headerText:"Email"}}),n("e-column",{attrs:{field:"personal_details.phone",headerText:"Phone"}}),n("e-column",{attrs:{field:"programme.name",headerText:"Programme"}}),n("e-column",{attrs:{field:"academic_term.name",headerText:"Academic-Term"}})],1)],1)],1)],1)])])},o=[],r=n("e19c"),a=n("bc3a"),s=n.n(a),c=n("a026"),l=n("e440"),u=n.n(l),d=n("5596"),f=n.n(d),p=n("c9f5"),m=n("c041"),h=n("2375"),g=n("c2da"),y=n("6e1f"),b=n("aa15"),v=n("9453"),w=n("efb1"),x=n("7d05"),O=n("afc0"),j=n("e29d"),_=n("262e"),T=n("e09d"),C=n("57aa"),I=n("4c97"),k=s.a.create({withCredentials:!0}),E={success:"success",error:"error",info:"info",warn:"warn"},$={success:P,error:P,info:P,warn:P};function P(e){var t=e.title,n=e.message,i=e.type,o=e.timeout,r=e.cb;return f.a[i](n,t,o,r)}f.a.init({types:E}),c["default"].use(u.a,$),c["default"].use(m["a"]),c["default"].use(p["a"]);var S={name:"StudentList",components:{},provide:{grid:[h["a"],g["a"],y["a"],b["a"],v["a"],w["a"],x["a"],O["a"],j["a"],_["a"],T["a"],C["a"],I["a"]]},data:function(){return{rowHeight:30,height:window.innerHeight-170,filterOptions:{type:"CheckBox"},toolbar:["Search","ColumnChooser",{prefixIcon:"e-small-icon",id:"big",align:"Right"},{prefixIcon:"e-medium-icon",id:"medium",align:"Right"},{prefixIcon:"e-big-icon",id:"small",align:"Right"}],students:[],addTemplate:function(){return{template:c["default"].component("addTemplate",{template:'<b-badge id="label1" variant="success" ><i class="fa fa-plus"></i>&nbsp<span v-text="$ml.get(\'add\')"></span></b-badge>',data:function(){return{data:{}}}})}},deleteTemplate:function(){return{template:c["default"].component("deleteTemplate",{template:'<b-badge id="label1" variant="primary" ><i class="fa fa-trash-o"></i>&nbsp<span v-text="$ml.get(\'delete\')"></span></b-badge>',data:function(){return{data:{}}}})}}}},methods:{actionBegin:function(e){},editStudent:function(e){this.$router.push("/academics/student/details/".concat(e.rowData._id))},addEditHandler:function(e){var t=this,n=this.$refs.studentgrid.getSelectedRecords();"add"==e.item.id&&this.$router.push({name:"Add Student"}),"delete"==e.item.id&&(console.log(n[0]._id),k.delete("".concat(r["a"],"stud/student/delete/one/").concat(n[0]._id)).then(function(e){console.log(e),k.get("".concat(r["a"],"stud/student/view/all")).then(function(e){t.students=e.data})}))},clickHandler:function(e){"small"===e.item.id&&(this.rowHeight=20),"medium"===e.item.id&&(this.rowHeight=40),"big"===e.item.id&&(this.rowHeight=60),"Excel Export"===e.item.text&&this.$refs.overviewgrid.excelExport(),"PDF Export"===e.item.text&&this.$refs.overviewgrid.pdfExport()}},mounted:function(){var e=this;k.get("".concat(r["a"],"stud/student/view/all")).then(function(t){e.students=t.data})}},N=S,R=(n("8a7b"),n("2877")),H=Object(R["a"])(N,i,o,!1,null,"1482aaa8",null);t["default"]=H.exports},5596:function(e,t,n){var i,o,r;(function(n,a){o=[],i=a,r="function"===typeof i?i.apply(t,o):i,void 0===r||(e.exports=r)})(0,function(){"use strict";var e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){var n,i;if("undefined"===typeof window)return{init:function(){}};function o(e,t){var n=this;e.style.opacity&&e.style.opacity>.05?e.style.opacity=e.style.opacity-.05:e.style.opacity&&e.style.opacity<=.1?e.parentNode&&(e.parentNode.removeChild(e),t&&t()):e.style.opacity=.9,setTimeout(function(){return o.apply(n,[e,t])},1e3/30)}var r={error:"error",warn:"warn",success:"success",info:"info"},a={container:"mini-toastr",notification:"mini-toastr__notification",title:"mini-toastr-notification__title",icon:"mini-toastr-notification__icon",message:"mini-toastr-notification__message",error:"-"+r.error,warn:"-"+r.warn,success:"-"+r.success,info:"-"+r.info};function s(t,n,i){for(var o in n=n||{},i=i||"",t)if(t.hasOwnProperty(o)){var r=t[o];r&&"object"===("undefined"===typeof r?"undefined":e(r))&&!(r instanceof Date||r instanceof RegExp)?s(r,n,i+o+" "):n[i]&&"object"===e(n[i])?n[i][o]=r:(n[i]={},n[i][o]=r)}return n}function c(e){var t=s(e),n=JSON.stringify(t,null,2);return n=n.replace(/"([^"]*)": \{/g,"$1 {").replace(/"([^"]*)"/g,"$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g,"$1: $2;").replace(/},/g,"}\n").replace(/ &([.:])/g,"$1"),n=n.substr(1,n.lastIndexOf("}")-1),n}function l(e){var t=document.head||document.getElementsByTagName("head")[0],n=d("style");n.id="mini-toastr-styles",n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)}var u={types:r,animation:o,timeout:3e3,icons:{},appendTarget:document.body,node:d(),style:(i={},t(i,"."+a.container,{position:"fixed","z-index":99999,right:"12px",top:"12px"}),t(i,"."+a.notification,(n={cursor:"pointer",padding:"12px 18px",margin:"0 0 6px 0","background-color":"#000",opacity:.8,color:"#fff","border-radius":"3px","box-shadow":"#3c3b3b 0 0 12px",width:"300px"},t(n,"&."+a.error,{"background-color":"#D5122B"}),t(n,"&."+a.warn,{"background-color":"#F5AA1E"}),t(n,"&."+a.success,{"background-color":"#7AC13E"}),t(n,"&."+a.info,{"background-color":"#4196E1"}),t(n,"&:hover",{opacity:1,"box-shadow":"#000 0 0 12px"}),n)),t(i,"."+a.title,{"font-weight":"500"}),t(i,"."+a.message,{display:"inline-block","vertical-align":"middle",width:"240px",padding:"0 12px"}),i)};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(e)}function f(e,t,n){var i=d(n.icons[t].nodeType),o=n.icons[t].attrs;for(var r in o)o.hasOwnProperty(r)&&i.setAttribute(r,o[r]);e.appendChild(i)}function p(e,t,n){var i=d();i.className=n,i.appendChild(document.createTextNode(t)),e.appendChild(i)}var m={config:u,showMessage:function(e,t,n,i,o,r){var s={};Object.assign(s,this.config),Object.assign(s,r);var c=d();return c.className=a.notification+" "+a[n],c.onclick=function(){s.animation(c,null)},t&&p(c,t,a.title),s.icons[n]&&f(c,n,s),e&&p(c,e,a.message),s.node.insertBefore(c,s.node.firstChild),setTimeout(function(){return s.animation(c,o)},i||s.timeout),o&&o(),this},init:function(e){var t=this,n={};Object.assign(n,u),Object.assign(n,e),this.config=n;var i=c(n.style);return l(i),n.node.id=""+a.container,n.node.className=""+a.container,n.appendTarget.appendChild(n.node),Object.keys(n.types).forEach(function(e){m[n.types[e]]=function(t,i,o,r,a){return this.showMessage(t,i,n.types[e],o,r,a),this}.bind(t)}),this},setIcon:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"i",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];n["class"]=n["class"]?n["class"]+" "+a.icon:a.icon,this.config.icons[e]={nodeType:t,attrs:n}}};return m}();return n})},"8a7b":function(e,t,n){"use strict";var i=n("e04c"),o=n.n(i);o.a},c9f5:function(e,t,n){"use strict";var i=n("db21"),o=n("453f"),r=n("a026"),a=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),s=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){},t=s([Object(i["b"])({})],t),t}(r["default"]),l={name:"e-items",install:function(e){e.component(l.name,c)}},u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){},t=s([Object(i["b"])({})],t),t}(r["default"]),d={name:"e-item",install:function(e){e.component(d.name,u)}};n.d(t,"a",function(){return y});var f=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),p=function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},m=["enablePersistence","enableRtl","height","items","locale","overflowMode","width","beforeCreate","clicked","created","destroyed"],h=[],g=function(e){function t(){var t=e.call(this)||this;return t.propKeys=m,t.models=h,t.hasChildDirective=!0,t.hasInjectedModules=!1,t.tagMapper={"e-items":"e-item"},t.tagNameMapper={},t.ej2Instances=new o["a"]({}),t.bindProperties(),t}return f(t,e),t.prototype.render=function(e){return e("div",this.$slots.default)},t.prototype.addItems=function(e,t){return this.ej2Instances.addItems(e,t)},t.prototype.disable=function(e){return this.ej2Instances.disable(e)},t.prototype.enableItems=function(e,t){return this.ej2Instances.enableItems(e,t)},t.prototype.hideItem=function(e,t){return this.ej2Instances.hideItem(e,t)},t.prototype.refreshOverflow=function(){return this.ej2Instances.refreshOverflow()},t.prototype.removeItems=function(e){return this.ej2Instances.removeItems(e)},t=p([Object(i["b"])({props:m})],t),t}(i["a"]),y={name:"ejs-toolbar",install:function(e){e.component(y.name,g),e.component(d.name,u),e.component(l.name,c)}}},e04c:function(e,t,n){},e440:function(e,t,n){var i,o,r;(function(n,a){o=[],i=a,r="function"===typeof i?i.apply(t,o):i,void 0===r||(e.exports=r)})(0,function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var t="VueNotifications",n="vue-notifications",i="notifications",o={error:"error",warn:"warn",info:"info",success:"success"},r=1,a={alreadyInstalled:t+": plugin already installed",methodNameConflict:t+": names conflict - "};function s(e){var t=e.version.match(/(\d+)/g);return+t[0]}function c(e){var t=e.type,n=e.message,i=e.title,r="Title: "+i+", Message: "+n+", Type: "+t;t===o.error?console.error(r):t===o.warn?console.warn(r):console.log(r)}function l(e,t){var n={};return Object.keys(t).forEach(function(i){n[i]="cb"===i?t[i].bind(e):"function"===typeof t[i]?t[i].call(e):t[i]}),n}function u(e,t){var n=l(t,e),i=y.pluginOptions[n.type],o=i?y.pluginOptions[n.type]:c;if(o(n,t),e.cb)return e.cb()}function d(e,t){Object.keys(t).forEach(function(n){e[t[n]]=function(e){return e.type=t[n],u(e)}})}function f(e,t,n,i){n.methods||(n.methods={}),n.methods[t]||(n.methods[t]=p(e,t,n,i))}function p(e,t,n,i){return function(o){var r=Object.assign({},y.config,n[y.propertyName][t],o);return u(r,i,e)}}function m(e,t,i){t&&(Object.keys(t).forEach(function(t){return f(e,t,e.$options,i)}),e.$emit(n+"-initiated"))}function h(e,t){if(t){var i=e.$options.methods;Object.keys(t).forEach(function(e){i[e]&&(i[e]=void 0,delete i[e])}),e.$emit(n+"-unlinked")}}function g(t,n){var i,o=s(t)===r?"init":"beforeCreate";return i={},e(i,o,function(){var e=this.$options[y.propertyName];m(this,e,n)}),e(i,"beforeDestroy",function(){var e=this.$options[y.propertyName];h(this,e)}),i}var y={types:o,propertyName:i,config:{type:o.info,timeout:3e3},pluginOptions:{},installed:!1,install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.installed)throw console.error(a.alreadyInstalled);var n=g(e,t);e.mixin(n),this.setPluginOptions(t),d(this,this.types),this.installed=!0},setPluginOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.pluginOptions=e}};return"undefined"!==typeof window&&window.Vue&&window.Vue.use(y),y})}}]);
//# sourceMappingURL=chunk-c2b0b886.93106ca6.js.map