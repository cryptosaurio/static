(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[34],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var c=n(149),r=n(12),a=n(0),i=n(159),s=n(165),o=n(138),l=n(2);function d(){var e={page:"blog",country:window.COUNTRY},t=Object(s.useTracking)(e),n=t.Track,d=t.trackEvent,u=Object(o.a)().t,b=Object(a.useState)([]),m=Object(r.a)(b,2),j=m[0],w=m[1],f=Object(a.useState)([]),_=Object(r.a)(f,2),g=_[0],h=_[1],x=Object(a.useState)(""),p=Object(r.a)(x,2),O=p[0],N=p[1];return Object(a.useEffect)((function(){var t={event:"pageview"};"production"===window.ENV?d(t):console.log(e,t)}),[]),Object(a.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/blog-posts"):"".concat(window.BARNEY_BR_API_URL,"/blog-posts")).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return!e.available_countries&&!e.excluded_countries||e.available_countries&&e.available_countries.split(",").indexOf(window.COUNTRY.toUpperCase())>-1||e.excluded_countries&&-1===e.excluded_countries.split(",").indexOf(window.COUNTRY.toUpperCase())}));w(t.filter((function(e){return!e.tracker_id||e.tracker_id&&-1===e.tracker_id.indexOf("backlink")}))),h(t.filter((function(e){return e.tracker_id&&e.tracker_id.indexOf("backlink")>-1})))})).catch((function(){return w([])}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"mx-5 mt-5 relative text-gray-600 focus-within:text-gray-400",children:[Object(l.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(l.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(l.jsx)(i.u,{className:"w-5 h-5"})})}),Object(l.jsx)("input",{type:"search",name:"q",className:"py-2 w-56 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:u("Buscar"),autoComplete:"off",value:O,onChange:function(e){return N(e.target.value.toLowerCase())}})]}),Object(l.jsxs)("div",{className:"grid lg:grid-cols-2 md:grid-flow-row pb-10",children:[Object(l.jsxs)(n,{children:[j.map((function(e){return e.tracker_id&&d({event:"system_action",event_category:e.tracker_id,event_label:"show"}),e})).filter((function(e){return(e["title_".concat(window.LANGUAGE)]||e.title_es).toLowerCase().includes(O)||(e["description_".concat(window.LANGUAGE)]||e.description_es).toLowerCase().includes(O)})).map((function(e){return Object(l.jsxs)("a",{href:"".concat(0===e.is_external&&"br"!=window.COUNTRY?"/"+window.COUNTRY:"").concat(e["url_".concat(window.LANGUAGE)]||e.url_es),target:0===e.is_external?void 0:"_blank",rel:1===e.sponsored?"sponsored noreferrer":void 0,className:"m-5",onClick:function(){e.tracker_id&&d({event:"user_action",event_category:e.tracker_id,event_label:"click"})},children:[Object(l.jsx)("div",{className:"bg-gray-800 text-blue-400 inline-block",children:1===e.sponsored?"Patrocinado":null}),Object(l.jsxs)("div",{className:["bg-gray-850 grid grid-cols-3 h-full px-5 border",1===e.sponsored?"border-blue-400":"border-gray-500"].join(" "),children:[Object(l.jsx)("div",{className:"m-auto flex-shrink-0 w-36 hidden sm:block",children:Object(l.jsx)("img",{loading:"lazy",src:e.img})}),Object(l.jsx)("div",{className:"m-auto col-span-3 sm:col-span-2",children:Object(l.jsxs)("div",{className:"p-5",children:[Object(l.jsx)("h5",{className:"text-xl font-semibold mb-2",children:e["title_".concat(window.LANGUAGE)]||e.title_es}),Object(l.jsx)("p",{className:"mb-4",children:e["description_".concat(window.LANGUAGE)]||e.description_es})]})})]})]},e.pk)})),g.length>0&&g.filter((function(e){return(e["title_".concat(window.LANGUAGE)]||e.title_es).toLowerCase().includes(O)})).length>0&&Object(l.jsxs)("div",{className:"py-5 mx-5",children:[Object(l.jsx)("div",{className:"bg-gray-800 text-gray-400 inline-block",children:"Patrocinado"}),Object(l.jsx)("div",{className:"bg-gray-850 border border-gray-500 flex flex-col",children:g.slice(0,5).map((function(e,t){return e.tracker_id&&d({event:"system_action",event_category:e.tracker_id,event_label:"show"}),e})).filter((function(e){return(e["title_".concat(window.LANGUAGE)]||e.title_es).toLowerCase().includes(O)})).map((function(e,t){return Object(l.jsx)("a",{className:"px-5",href:"".concat(0===e.is_external&&"br"!=window.COUNTRY?"/"+window.COUNTRY:"").concat(e["url_".concat(window.LANGUAGE)]||e.url_es),target:0===e.is_external?void 0:"_blank",onClick:function(){e.tracker_id&&d({event:"user_action",event_category:e.tracker_id,event_label:"click"})},children:Object(l.jsx)("h5",{className:"mb-2 mt-2",children:e["title_".concat(window.LANGUAGE)]||e.title_es})},e.pk)}))})]}),g.length>5&&g.filter((function(e){return(e["title_".concat(window.LANGUAGE)]||e.title_es).toLowerCase().includes(O)})).length>0&&Object(l.jsxs)("div",{className:"py-5 mx-5",children:[Object(l.jsx)("div",{className:"bg-gray-800 text-gray-400 inline-block",children:"Patrocinado"}),Object(l.jsx)("div",{className:"bg-gray-850 border border-gray-500 flex flex-col",children:g.slice(5,g.length).map((function(e,t){return e.tracker_id&&d({event:"system_action",event_category:e.tracker_id,event_label:"show"}),e})).filter((function(e){return(e["title_".concat(window.LANGUAGE)]||e.title_es).toLowerCase().includes(O)})).map((function(e,t){return Object(l.jsx)("a",{className:"px-5",href:"".concat(0===e.is_external&&"br"!=window.COUNTRY?"/"+window.COUNTRY:"").concat(e["url_".concat(window.LANGUAGE)]||e.url_es),target:0===e.is_external?void 0:"_blank",onClick:function(){e.tracker_id&&d({event:"user_action",event_category:e.tracker_id,event_label:"click"})},children:Object(l.jsx)("h5",{className:"mb-2 mt-2",children:e["title_".concat(window.LANGUAGE)]||e.title_es})},e.pk)}))})]})]}),0===j.length&&Object(c.a)(Array(6)).map((function(e,t){return Object(l.jsx)("div",{className:"m-5 bg-gray-850",children:Object(l.jsxs)("div",{className:"grid grid-cols-3 h-full p-5 border border-gray-500",children:[Object(l.jsx)("div",{className:"m-auto flex-shrink-0 bg-gray-700 h-28 w-28 sm:h-36 sm:w-36 animate-pulse"}),Object(l.jsx)("div",{className:"m-auto col-span-2",children:Object(l.jsxs)("div",{className:"p-5",children:[Object(l.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-32 sm:w-64 h-3"}),Object(l.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-72 h-3"}),Object(l.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(l.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(l.jsx)("p",{className:"bg-gray-700 animate-pulse w-24 sm:w-64 h-3"})]})})]})},t)}))]})]})}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(26);var r=n(187),a=n(22);function i(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||Object(r.a)(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},187:function(e,t,n){"use strict";function c(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return c}))}}]);