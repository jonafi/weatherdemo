(this.webpackJsonpweatherdemo=this.webpackJsonpweatherdemo||[]).push([[0],{23:function(t,n,e){},24:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var a=e(1),o=e(2),c=e.n(o),r=e(12),i=e.n(r),u=(e(23),e(24),e(13)),f=e(14),s=e(17),d=e(16),l=e(15),h=e.n(l),b=function(){return h.a.get("http://api.weatherapi.com/v1/forecast.json?key=b954a8a0fe044aa4b25173138202411&q=London&days=3")},j=function(t){Object(s.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(u.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=n.call.apply(n,[this].concat(o))).loadDefaultData=function(){b().then((function(t){console.log(t.data.forecast);var n=t.data.forecast.forecastday[1];document.write(JSON.stringify(n))}))},t}return Object(f.a)(e,[{key:"componentDidMount",value:function(){this.loadDefaultData()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:"Loading ..."})}}]),e}(o.Component),p=function(){return Object(a.jsx)(j,{})},g=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,43)).then((function(n){var e=n.getCLS,a=n.getFID,o=n.getFCP,c=n.getLCP,r=n.getTTFB;e(t),a(t),o(t),c(t),r(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),g()}},[[42,1,2]]]);
//# sourceMappingURL=main.39cf5834.chunk.js.map