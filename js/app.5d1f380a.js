(function(e){function t(t){for(var a,o,u=t[0],i=t[1],s=t[2],p=0,d=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},c=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("main",[r("div",{staticClass:"search-div"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search_query,expression:"search_query"}],staticClass:"search-location",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search_query},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchWeather(t)},input:function(t){t.target.composing||(e.search_query=t.target.value)}}}),r("button",{staticClass:"search-btn",on:{click:e.fetchWeather}},[e._v("Go")])]),r("div",{staticClass:"location-div"},[r("div",{staticClass:"location"},[e._v(e._s(e.weather.city)+", "+e._s(e.weather.country))]),r("div",{staticClass:"date"},[e._v(e._s(e.weather.date))])]),r("div",{staticClass:"weather-div"},[r("div",{staticClass:"temp"},[e._v(e._s(e.weather.temp)+"°C")]),r("div",{staticClass:"weather"},[e._v(e._s(e.weather.name))])])])])},c=[],o=r("1da1"),u=(r("96cf"),r("d3b7"),r("99af"),r("b0c0"),{name:"App",data:function(){return{api_key:"7ad399f7a4f4ea29190d3cd20bb709e4",base_url:"https://api.openweathermap.org/data/2.5/",search_query:"",weather:{name:"None",temp:"0",city:"Somewhere",country:"Else",date:"Thursday 1 April 2021"}}},methods:{fetchWeather:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.base_url,"weather?q=").concat(e.search_query,"&units=metric&appid=").concat(e.api_key));case 2:return r=t.sent,t.next=5,r.json();case 5:a=t.sent,e.weather.name=a.weather[0].main,e.weather.temp=a.main.temp,e.weather.city=a.name,e.weather.country=a.sys.country,e.weather.date=e.formatDate();case 11:case"end":return t.stop()}}),t)})))()},formatDate:function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],r=new Date,a="";return a+="".concat(t[r.getDay()]," "),a+="".concat(r.getDay()," "),a+="".concat(e[r.getMonth()]," "),a+="".concat(r.getFullYear()," "),a}}}),i=u,s=(r("034f"),r("2877")),l=Object(s["a"])(i,n,c,!1,null,null,null),p=l.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.5d1f380a.js.map