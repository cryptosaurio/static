(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[56],{315:function(t,e,n){"use strict";n.r(e);var o=n(12);var r=n(0),c=n.n(r),s=n(155),a=n(136),i=n(162),u=n(2);function l(t){!function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t);var e=Object(a.a)().t,n={page:"investments-dashboard",country:window.COUNTRY},c=Object(i.useTracking)(n).trackEvent,l={event:"user_action",event_category:"cryptosaurio_investmentsDashboard_amountOfUsersNotification",event_label:"close"},d=Object(r.useState)(null),b=Object(o.a)(d,2),h=b[0],j=b[1],f=Object(r.useState)(!1),m=Object(o.a)(f,2),p=m[0],w=m[1];return Object(r.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/get-historical-users/anchor-protocol-monitor"):"".concat(window.BARNEY_BR_API_URL,"/get-historical-users/anchor-protocol-monitor")).then((function(t){return t.json()})).then((function(t){return j(t.amount)})).catch((function(){return j(null)}))}),[]),!p&&h&&Object(u.jsxs)("div",{className:"bg-white rounded-lg border-gray-300 border p-3 shadow-lg absolute top-5 right-5 z-30",children:[Object(u.jsxs)("div",{className:"grid grid-flow-col",children:[Object(u.jsx)("p",{className:"text-4xl",children:"\ud83e\udd96"}),Object(u.jsxs)("div",{className:"ml-2 mr-6 text-xs w-44",children:[Object(u.jsx)("p",{className:"inline text-black font-bold",children:e("{{amount}} personas",{amount:h})}),Object(u.jsxs)("p",{className:"inline text-black",children:[" ",e("est\xe1n siguiendo sus inversiones con Cryptosaurio, \xa1s\xfamate t\xfa tambi\xe9n!")]})]})]}),Object(u.jsx)(s.E,{className:"w-5 h-5 absolute top-2 right-2 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(t){t.preventDefault(),"production"===window.ENV?c(l):console.log(n,l),w(!0)}})]})||Object(u.jsx)(u.Fragment,{})}var d=function(t,e){return!0};e.default=c.a.memo(l,d)}}]);