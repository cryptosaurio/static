(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[33],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var r=n(146),c=n(12),a=n(0),i=n(162),s=n(2);function o(){var e={page:"blog",country:window.COUNTRY},t=Object(i.useTracking)(e),n=t.Track,o=t.trackEvent,l=Object(a.useState)([]),d=Object(c.a)(l,2),b=d[0],u=d[1],m=Object(a.useState)([]),j=Object(c.a)(m,2),f=j[0],w=j[1];return Object(a.useEffect)((function(){var t={event:"pageview"};"production"===window.ENV?o(t):console.log(e,t)}),[]),Object(a.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/blog-posts"):"".concat(window.BARNEY_BR_API_URL,"/blog-posts")).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return!e.available_countries&&!e.excluded_countries||e.available_countries&&e.available_countries.split(",").indexOf(window.COUNTRY.toUpperCase())>-1||e.excluded_countries&&-1===e.excluded_countries.split(",").indexOf(window.COUNTRY.toUpperCase())}));u(t.filter((function(e){return!e.tracker_id||e.tracker_id&&-1===e.tracker_id.indexOf("backlink")}))),w(t.filter((function(e){return e.tracker_id&&e.tracker_id.indexOf("backlink")>-1})))})).catch((function(){return u([])}))}),[]),Object(s.jsxs)("div",{className:"grid lg:grid-cols-2 md:grid-flow-row pb-10",children:[Object(s.jsxs)(n,{children:[b.map((function(e){return e.tracker_id&&o({event:"system_action",event_category:e.tracker_id,event_label:"show"}),Object(s.jsxs)("a",{href:"".concat(0===e.is_external&&"br"!=window.COUNTRY?"/"+window.COUNTRY:"").concat(e["url_".concat(window.LANGUAGE)]||e.url_es),target:0===e.is_external?void 0:"_blank",rel:1===e.sponsored?"sponsored noreferrer":void 0,className:"m-5",onClick:function(){e.tracker_id&&o({event:"user_action",event_category:e.tracker_id,event_label:"click"})},children:[Object(s.jsx)("div",{className:"bg-gray-800 text-blue-400 inline-block",children:1===e.sponsored?"Patrocinado":null}),Object(s.jsxs)("div",{className:["bg-gray-850 grid grid-cols-3 h-full px-5 border",1===e.sponsored?"border-blue-400":"border-gray-500"].join(" "),children:[Object(s.jsx)("div",{className:"m-auto flex-shrink-0 w-36 hidden sm:block",children:Object(s.jsx)("img",{loading:"lazy",src:e.img})}),Object(s.jsx)("div",{className:"m-auto col-span-3 sm:col-span-2",children:Object(s.jsxs)("div",{className:"p-5",children:[Object(s.jsx)("h5",{className:"text-xl font-semibold mb-2",children:e["title_".concat(window.LANGUAGE)]||e.title_es}),Object(s.jsx)("p",{className:"mb-4",children:e["description_".concat(window.LANGUAGE)]||e.description_es})]})})]})]},e.pk)})),f.length>0&&Object(s.jsxs)("div",{className:"py-5 mx-5",children:[Object(s.jsx)("div",{className:"bg-gray-800 text-gray-400 inline-block",children:"Patrocinado"}),Object(s.jsx)("div",{className:"bg-gray-850 border border-gray-500 h-full flex flex-col",children:f.map((function(e,t){return e.tracker_id&&o({event:"system_action",event_category:e.tracker_id,event_label:"show"}),Object(s.jsx)("a",{className:["px-5",0===t?"mt-auto":t===f.length-1?"mb-auto":""].join(" "),href:"".concat(0===e.is_external&&"br"!=window.COUNTRY?"/"+window.COUNTRY:"").concat(e["url_".concat(window.LANGUAGE)]||e.url_es),target:0===e.is_external?void 0:"_blank",onClick:function(){e.tracker_id&&o({event:"user_action",event_category:e.tracker_id,event_label:"click"})},children:Object(s.jsx)("h5",{className:"mb-2 mt-2",children:e["title_".concat(window.LANGUAGE)]||e.title_es})},e.pk)}))})]})]}),0===b.length&&Object(r.a)(Array(6)).map((function(e,t){return Object(s.jsx)("div",{className:"m-5 bg-gray-850",children:Object(s.jsxs)("div",{className:"grid grid-cols-3 h-full p-5 border border-gray-500",children:[Object(s.jsx)("div",{className:"m-auto flex-shrink-0 bg-gray-700 h-28 w-28 sm:h-36 sm:w-36 animate-pulse"}),Object(s.jsx)("div",{className:"m-auto col-span-2",children:Object(s.jsxs)("div",{className:"p-5",children:[Object(s.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-32 sm:w-64 h-3"}),Object(s.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-40 sm:w-72 h-3"}),Object(s.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(s.jsx)("p",{className:"mb-2 bg-gray-700 animate-pulse w-44 sm:w-80 h-3"}),Object(s.jsx)("p",{className:"bg-gray-700 animate-pulse w-24 sm:w-64 h-3"})]})})]})},t)}))]})}},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(26);var c=n(182),a=n(22);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(c.a)(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},182:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return r}))}}]);