(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[52],{121:function(n,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return o}));var c=r(12),e=r(0);function o(n){var t=n.match,r=Object(e.useState)(""),o=Object(c.a)(r,2),a=o[0],i=o[1];return Object(e.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/provider/").concat(t.params.providerId):"".concat(window.BARNEY_BR_API_URL,"/provider/").concat(t.params.providerId)).then((function(n){return n.json()})).then((function(n){i(n.name)}))}),[t.params.providerId]),a}}}]);