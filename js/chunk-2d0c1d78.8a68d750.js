(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1d78"],{4886:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animated slideInLeft",staticStyle:{"animation-duration":"100ms"}},[n("b-card",[n("b-card-header",[n("i",{staticClass:"icon-menu mr-1"}),n("span",{domProps:{textContent:t._s(t.$ml.get("usergroups"))}}),n("router-link",{attrs:{to:{name:"Add Permission"}}},[n("h5",[n("b-badge",{attrs:{variant:"primary"},domProps:{textContent:t._s(t.$ml.get("addusergroups"))}})],1)])],1),n("b-card-body",{staticStyle:{padding:"0 1.25rem 0 1.25rem !important"}},[n("v-client-table",{attrs:{columns:t.columns,data:t.data,options:t.options,theme:t.theme,id:"dataTable"},on:{"row-click":t.onRowClick},scopedSlots:t._u([{key:"_id",fn:function(t){return n("router-link",{staticClass:"icon-eye",attrs:{target:"_blank",to:"user/drtails/"+t.row._id}})}}])})],1)],1)],1)},r=[],o=(n("96cf"),n("3b8d")),s=n("a026"),i=n("9ebe"),u=n("bc3a"),c=n.n(u),l=n("e19c");s["default"].use(i["ClientTable"]);var d={name:"Category",components:{ClientTable:i["ClientTable"],Event:i["Event"]},data:function(){return{columns:["user_group","modules"],data:[],options:{headings:{user_group:"User Group",modules:"Modules"},sortable:["user_group","modules"],filterable:["user_group","modules"],sortIcon:{base:"fa",up:"fa-sort-asc",down:"fa-sort-desc",is:"fa-sort"},pagination:{chunk:5,edge:!1,nav:"scroll"}},useVuex:!1,theme:"bootstrap4",template:"default"}},props:["key"],mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:c.a.get("".concat(l["b"])+"super/group/getall/"+"".concat(this.key),{withCredentials:!0}).then(function(t){e.data=t.data});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),updated:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:c.a.get("".concat(l["b"])+"super/group/getall/"+"".concat(this.key),{withCredentials:!0}).then(function(t){e.data=t.data});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{onRowClick:function(t){window.location.href="#/usergroupsdetails/".concat(t.row.user_group)}}},p=d,m=n("2877"),f=Object(m["a"])(p,a,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0c1d78.8a68d750.js.map