(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-listque-listque"],{1987:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created:function(){this.firstChildAppend=!1},methods:{loadMore:function(t){this.$emit("scrolltolower")},scroll:function(t){this.$emit("scroll",t)}}};e.default=i},"3f1c":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-list uni-border-top-bottom"},[this.border?e("v-uni-view",{staticClass:"uni-list--border-top"}):this._e(),this._t("default"),this.border?e("v-uni-view",{staticClass:"uni-list--border-bottom"}):this._e()],2)},r=[]},"466a":function(t,e,n){"use strict";n.r(e);var i=n("51d3"),r=n("c3df");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("e0dd");var u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"3c24fac8",null,!1,i["a"],void 0);e["default"]=s.exports},"51d3":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniList:n("6782").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticStyle:{"text-align":"center","font-size":"22px","margin-bottom":"10px"}},[t._v(t._s(t.name))]),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.test.apply(void 0,arguments)}}},[t._v("上传Excel,批量上传")]),n("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("上传题目")]),n("v-uni-button",{staticClass:"btn"}),t._l(t.que_list,(function(e,i){return n("uni-list",{key:i,staticClass:"list"},[n("v-uni-view",[t._v(t._s(e[2]))]),n("v-uni-view",{class:0===e[7]?"right":null},[t._v("A:  "+t._s(e[3]))]),n("v-uni-view",{class:1===e[7]?"right":null},[t._v("B:  "+t._s(e[4]))]),n("v-uni-view",{class:2===e[7]?"right":null},[t._v("C:  "+t._s(e[5]))]),n("v-uni-view",{class:3===e[7]?"right":null},[t._v("D:  "+t._s(e[6]))])],1)}))],2)},o=[]},6782:function(t,e,n){"use strict";n.r(e);var i=n("3f1c"),r=n("b8de");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("9802");var u=n("f0c5"),s=Object(u["a"])(r["default"],i["b"],i["c"],!1,null,"6fce09b0",null,!1,i["a"],void 0);e["default"]=s.exports},"7d22":function(t,e,n){var i=n("f5ed");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("11c28ab2",i,!0,{sourceMap:!1,shadowMode:!1})},"879b":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7");var r=i(n("c7eb")),o=i(n("1da1")),u={data:function(){return{listid:"",url:"http://154.12.26.163:5000/",que_list:[],name:""}},onLoad:function(t){var e=this;return(0,o.default)((0,r.default)().mark((function n(){return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.listid=t.id,e.name=t.name,console.log(e.listid),uni.request({}),n.next=6,new Promise((function(t,n){uni.request({url:e.url+"getque?list_id="+e.listid,timeout:2e3,success:function(n){e.que_list=n.data,t("suc")},fail:function(){uni.showToast({title:"服务器繁忙，请稍后再试。。。",icon:"none",duration:1e3})}})}));case 6:case"end":return n.stop()}}),n)})))()},methods:{test:function(){var t=this;return(0,o.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.chooseFile({success:function(e){var n=e.tempFilePaths;uni.uploadFile({url:"http://154.12.26.163:5000/addexcel",filePath:n[0],name:"file",formData:{list_id:t.listid},success:function(e){console.log(e.data),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),uni.request({url:t.url+"getque?list_id="+t.listid,timeout:2e3,success:function(e){t.que_list=e.data,resolve("suc")},fail:function(){uni.showToast({title:"服务器繁忙，请稍后再试。。。",icon:"none",duration:1e3})}})}})}});case 1:case"end":return e.stop()}}),e)})))()},add:function(){uni.navigateTo({url:"../add/add?id="+this.listid+"&name="+this.name})}}};e.default=u},9802:function(t,e,n){"use strict";var i=n("fe7e"),r=n.n(i);r.a},b8de:function(t,e,n){"use strict";n.r(e);var i=n("1987"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},c3df:function(t,e,n){"use strict";n.r(e);var i=n("879b"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},df3b:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-list[data-v-6fce09b0]{display:flex;background-color:#fff;position:relative;flex-direction:column}.uni-list--border[data-v-6fce09b0]{position:relative;z-index:-1}.uni-list--border-top[data-v-6fce09b0]{position:absolute;top:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5;z-index:1}.uni-list--border-bottom[data-v-6fce09b0]{position:absolute;bottom:0;right:0;left:0;height:1px;-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}',""]),t.exports=e},e0dd:function(t,e,n){"use strict";var i=n("7d22"),r=n.n(i);r.a},f5ed:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".list uni-view[data-v-3c24fac8]{margin-top:15px;font-size:20px}.right[data-v-3c24fac8]{color:red}",""]),t.exports=e},fe7e:function(t,e,n){var i=n("df3b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("b5e7d906",i,!0,{sourceMap:!1,shadowMode:!1})}}]);