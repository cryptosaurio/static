(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[24],{262:function(t,n,c){"use strict";c.r(n),c.d(n,"default",(function(){return a}));var e=c(4),o=c(0);function a(t){var n=t.match,c=Object(o.useState)(""),a=Object(e.a)(c,2),r=a[0],i=a[1];return Object(o.useEffect)((function(){fetch("https://barney.cryptosaurio.com/blog-posts?url=".concat(n.pathname)).then((function(t){return t.json()})).then((function(t){i(t["title_".concat(window.LANGUAGE)]||t["title_".concat(window.FALLBACK_LANGUAGE)])}))}),[n.pathname]),r}}}]);