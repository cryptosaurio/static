/*! For license information please see 32.339fe1b0.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[32],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var a=r(134),n=r(8),o=r(0),c=r.n(o),s=r(27),i=r(238),l=r(198),u=r(129),d=r(225),p=r(160),m=r(2),b=c.a.lazy((function(){return Promise.all([r.e(1),r.e(6),r.e(8)]).then(r.bind(null,267))}));function f(){return Object(m.jsx)(d.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(m.jsx)(g,{})})}function g(){var e={page:"providers-ranking",country:window.COUNTRY},t=Object(p.useTracking)(e).trackEvent,r=Object(u.a)().t,c=Object(d.b)().executeRecaptcha;Object(o.useEffect)((function(){var r={event:"pageview"};"production"===window.ENV?t(r):console.log(e,r)}),[]);var f=Object(o.useState)([]),g=Object(n.a)(f,2),x=g[0],j=g[1],h=Object(o.useState)(null),y=Object(n.a)(h,2),v=y[0],w=y[1],O=Object(o.useState)(null),N=Object(n.a)(O,2),S=N[0],_=N[1],C=Object(o.useState)(!1),R=Object(n.a)(C,2),P=R[0],E=R[1],k=Object(o.useState)(""),$=Object(n.a)(k,2),A=$[0],M=$[1];return Object(o.useEffect)((function(){fetch("br"!==window.COUNTRY?"".concat(window.BARNEY_API_URL,"/").concat(window.COUNTRY,"/reviews/summarized-reviews-info?merge_p2p=true"):"".concat(window.BARNEY_BR_API_URL,"/reviews/summarized-reviews-info?merge_p2p=true")).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return 1===e.enabled})).sort((function(e,t){return t.rating-e.rating})),r=t.filter((function(e){return-1===e.provider_id.indexOf("p2p")}));j(t);var n=t.filter((function(e){return e.count>9}))[0],o=Object(a.a)(t).filter((function(e){return e.count>9})).sort((function(e,t){return t.average_support_rating-e.average_support_rating}))[0],c=Object(a.a)(r).filter((function(e){return e.count>9})).sort((function(e,t){return t.average_transfer_speed_rating-e.average_transfer_speed_rating}))[0],s=Object(a.a)(t).filter((function(e){return e.count>9})).sort((function(e,t){return t.average_usability_rating-e.average_usability_rating}))[0],i=Object(a.a)(r).filter((function(e){return e.count>9})).sort((function(e,t){return t.average_arbitrage_quality-e.average_arbitrage_quality}))[0],l=Object(a.a)(t).filter((function(e){return e.count>9})).sort((function(e,t){return t.count-e.count}))[0];w({overall:n,support:o,transferSpeed:c,usability:s,arbitrageQuality:i,mostReviewed:l})})).catch((function(){j([])}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"mx-5 mt-5",children:[Object(m.jsx)("h1",{className:"text-2xl",children:r("Ranking")}),Object(m.jsx)("h2",{className:"text-lg pt-3",children:r("\xbfTe preguntabas cu\xe1l es la mejor plataforma donde comprar criptomonedas?")}),Object(m.jsx)("h2",{className:"text-lg pt-3",children:r("Para ayudarte a decidir, ordenamos las plataformas de {{countryName}} seg\xfan las opiniones de nuestros usuarios. \xa1An\xedmate tu tambi\xe9n y suma tu experiencia!",{countryName:window.COUNTRY_NAME})})]}),v&&Object(m.jsxs)("div",{className:"grid md:grid-cols-4 gap-5 text-center p-4",children:[v.overall&&Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(v.overall.provider_id),children:[Object(m.jsx)("img",{src:"/static/img/overall-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(m.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("con"))," ",Object(m.jsx)("p",{className:"font-bold",children:r("mejor promedio")})]})]}),Object(m.jsx)("a",{className:"text-blue-400",href:v.overall.url,target:"_blank",rel:"sponsored noreferrer",children:v.overall.name})]}),v.mostReviewed&&Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(v.mostReviewed.provider_id),children:[Object(m.jsx)("img",{src:"/static/img/most-reviews-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(m.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("con"))," ",Object(m.jsx)("p",{className:"font-bold",children:"".concat(r("m\xe1s")," ").concat(r("opiniones"))})]})]}),Object(m.jsx)("a",{className:"text-blue-400",href:v.mostReviewed.url,target:"_blank",rel:"sponsored noreferrer",children:v.mostReviewed.name})]}),v.arbitrageQuality&&Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(v.arbitrageQuality.provider_id),children:[Object(m.jsx)("img",{src:"/static/img/arbitrage-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(m.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("m\xe1s"))," ",Object(m.jsx)("p",{className:"font-bold",children:r("recomendada para arbitrar")})]})]}),Object(m.jsx)("a",{className:"text-blue-400",href:v.arbitrageQuality.url,target:"_blank",rel:"sponsored noreferrer",children:v.arbitrageQuality.name})]}),v.transferSpeed&&Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(v.transferSpeed.provider_id),children:[Object(m.jsx)("img",{src:"/static/img/transfer-speed-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(m.jsxs)("h2",{children:[r("Plataforma")," ",Object(m.jsx)("p",{className:"font-bold",children:r("m\xe1s r\xe1pida")})]})]}),Object(m.jsx)("a",{className:"text-blue-400",href:v.transferSpeed.url,target:"_blank",rel:"sponsored noreferrer",children:v.transferSpeed.name})]}),v.usability&&Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(v.usability.provider_id),children:[Object(m.jsx)("img",{src:"/static/img/usability-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(m.jsxs)("h2",{children:[r("Plataforma")," ",Object(m.jsx)("p",{className:"font-bold",children:r("m\xe1s f\xe1cil de usar")})]})]}),Object(m.jsx)("a",{className:"text-blue-400",href:v.usability.url,target:"_blank",rel:"sponsored noreferrer",children:v.usability.name})]}),v.support&&Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsxs)(s.b,{to:"".concat(r("/opiniones/")).concat(v.support.provider_id),children:[Object(m.jsx)("img",{src:"/static/img/support-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(m.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("con"))," ",Object(m.jsx)("p",{className:"font-bold",children:r("mejor atenci\xf3n")})]})]}),Object(m.jsx)("a",{className:"text-blue-400",href:v.support.url,target:"_blank",rel:"sponsored noreferrer",children:v.support.name})]})]}),!v&&Object(m.jsxs)("div",{className:"grid md:grid-cols-4 gap-5 text-center p-4",children:[Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(m.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(m.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(m.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(m.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(m.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]}),Object(m.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(m.jsx)("div",{className:"w-20 h-20 mx-auto bg-gray-800 animate-pulse"}),Object(m.jsx)("div",{className:"bg-gray-800 w-32 h-4 animate-pulse mx-auto"}),Object(m.jsx)("div",{className:"bg-gray-800 w-48 h-4 animate-pulse mx-auto mb-1"}),Object(m.jsx)("div",{className:"bg-gray-800 w-14 h-4 animate-pulse mx-auto"})]})]}),Object(m.jsxs)("div",{className:"mx-5 mt-5",children:[Object(m.jsxs)("div",{className:"relative text-gray-600 focus-within:text-gray-400",children:[Object(m.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(m.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(m.jsx)(i.a,{className:"w-5 h-5"})})}),Object(m.jsx)("input",{type:"search",name:"q",className:"py-2 w-56 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:r("Buscar una plataforma"),autoComplete:"off",value:A,onChange:function(e){return M(e.target.value.toLowerCase())}})]}),x.length>0&&Object(m.jsx)("div",{className:"flex flex-row flex-wrap gap-3 py-5",children:x.filter((function(e){return e.name.toLowerCase().includes(A)})).map((function(e,t){return Object(m.jsxs)("div",{className:"flex flex-row w-80",children:[Object(m.jsx)("div",{className:"text-9xl font-extrabold text-gray-700 sm:w-40 w-24 mr-1 text-right flex-shrink-0",children:t+1}),Object(m.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2 rounded-r-lg self-end py-2",children:[Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"sponsored noreferrer",className:"font-bold hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.name}),Object(m.jsxs)("span",{className:"flex rounded-lg px-3 bg-gray-700 text-white items-center w-max",children:[Object(m.jsx)(l.a,{className:"w-5 h-5 mr-1 text-blue-400","aria-hidden":"true"}),e.rating||"-"]}),Object(m.jsx)(s.b,{className:"text-gray-500 underline cursor-pointer",to:"/".concat(r("comisiones-y-limites"),"/").concat(e.provider_id),children:r("Ficha t\xe9cnica")}),e.rating&&Object(m.jsx)(s.b,{className:"cursor-pointer w-max p-1 px-5 text-xs font-medium rounded-lg border border-blue-400 bg-blue-400 hover:bg-blue-500 hover:text-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-400",to:"".concat(r("/opiniones/")).concat(e.provider_id),children:1==e.count?r("Ver {{reviewCount}} opinion",{reviewCount:e.count}):r("Ver {{reviewCount}} opiniones",{reviewCount:e.count})})||Object(m.jsx)("p",{className:"cursor-pointer w-max p-1 px-5 text-xs font-medium rounded-lg border border-blue-400 bg-blue-400 hover:bg-blue-500 hover:text-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-400",onClick:function(){_(e),E(!0)},children:r("Opinar")})]})]},t)}))})]}),P&&Object(m.jsx)(o.Suspense,{fallback:Object(m.jsx)("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:Object(m.jsx)("div",{className:"min-h-screen px-4",children:Object(m.jsx)("div",{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"})})}),children:Object(m.jsx)(b,{reviewModalIsOpen:P,executeRecaptcha:c,setReviewModalIsOpen:E,selectedProvider:S,setSelectedProvider:_,providerList:x,alreadyRecommended:[],setAlreadyRecommended:function(){}})}),0===x.length&&Object(m.jsx)("div",{className:"mx-5 mt-5",children:Object(m.jsx)("div",{className:"flex flex-row flex-wrap gap-3",children:Object(a.a)(Array(25)).map((function(e,t){return Object(m.jsxs)("div",{className:"flex flex-row cursor-pointer w-80",children:[Object(m.jsx)("div",{className:"text-9xl font-extrabold text-gray-700 sm:w-40 w-24 mr-1 text-right flex-shrink-0 animate-pulse",children:t+1}),Object(m.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2 pt-3 pb-4 rounded-r-lg",children:[Object(m.jsx)("div",{className:"bg-gray-700 w-28 h-4 animate-pulse"}),Object(m.jsx)("div",{className:"rounded-lg px-3 bg-gray-700 w-20 h-6 mt-0.5 mb-1 animate-pulse"}),Object(m.jsx)("div",{className:"bg-gray-700 w-24 h-5 animate-pulse -mb-1.5"}),Object(m.jsx)("div",{className:"bg-gray-700 w-32 h-6 animate-pulse -mb-2 p-1 px-5 mt-2.5 text-xs font-medium rounded-lg"})]})]},t)}))})})]})}},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(19);var n=r(177),o=r(15);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||Object(n.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},177:function(e,t,r){"use strict";function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}r.d(t,"a",(function(){return a}))},198:function(e,t,r){"use strict";var a=r(0);var n=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}))}));t.a=n},225:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r,a){return new(r||(r=Promise))((function(n,o){function c(e){try{i(a.next(e))}catch(e){o(e)}}function s(e){try{i(a.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}i((a=a.apply(e,t||[])).next())}))}function c(e,t){var r,a,n,o,c={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,a=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!((n=(n=c.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){c=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){c.label=o[1];break}if(6===o[0]&&c.label<n[1]){c.label=n[1],n=o;break}if(n&&c.label<n[2]){c.label=n[2],c.ops.push(o);break}n[2]&&c.ops.pop(),c.trys.pop();continue}o=t.call(e,c)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}var s,i=function(e){console.warn(e)};(s||(s={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var l=Object(a.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});l.Consumer;function u(e){var t=this,r=e.reCaptchaKey,u=e.useEnterprise,d=void 0!==u&&u,p=e.useRecaptchaNet,m=void 0!==p&&p,b=e.scriptProps,f=e.language,g=e.children,x=Object(a.useState)(null),j=x[0],h=x[1];Object(a.useEffect)((function(){if(r){var e=(null==b?void 0:b.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,r=e.language,a=e.onLoad,n=e.useRecaptchaNet,o=e.useEnterprise,c=e.scriptProps,s=void 0===c?{}:c,i=s.nonce,l=void 0===i?"":i,u=s.defer,d=void 0!==u&&u,p=s.async,m=void 0!==p&&p,b=s.id,f=void 0===b?"":b,g=s.appendTo,x=void 0===g?void 0:g,j=f||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(j))a();else{var h=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:o,useRecaptchaNet:n}),y=document.createElement("script");y.id=j,y.src=h+"?render="+t+(r?"&hl="+r:""),l&&(y.nonce=l),y.defer=!!d,y.async=!!m,y.onload=a,("body"===x?document.body:document.getElementsByTagName("head")[0]).appendChild(y)}}({reCaptchaKey:r,useEnterprise:d,useRecaptchaNet:m,scriptProps:b,language:f,onLoad:function(){if(window&&window.grecaptcha){var e=d?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){h(e)}))}else i("<GoogleRecaptchaProvider /> "+s.SCRIPT_NOT_AVAILABLE)},onError:function(){i("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var r=document.querySelector("#"+e);r&&r.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}i("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[d,m,b,f,r]);var y=Object(a.useCallback)((function(e){return o(t,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:if(!j||!j.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,j.execute(r,{action:e})];case 1:return[2,t.sent()]}}))}))}),[j]),v=Object(a.useMemo)((function(){return{executeRecaptcha:j?y:void 0}}),[y,j]);return n.a.createElement(l.Provider,{value:v},g)}var d=function(){return Object(a.useContext)(l)};function p(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"==typeof Symbol&&Symbol.for,b=m?Symbol.for("react.element"):60103,f=m?Symbol.for("react.portal"):60106,g=m?Symbol.for("react.fragment"):60107,x=m?Symbol.for("react.strict_mode"):60108,j=m?Symbol.for("react.profiler"):60114,h=m?Symbol.for("react.provider"):60109,y=m?Symbol.for("react.context"):60110,v=m?Symbol.for("react.async_mode"):60111,w=m?Symbol.for("react.concurrent_mode"):60111,O=m?Symbol.for("react.forward_ref"):60112,N=m?Symbol.for("react.suspense"):60113,S=m?Symbol.for("react.suspense_list"):60120,_=m?Symbol.for("react.memo"):60115,C=m?Symbol.for("react.lazy"):60116,R=m?Symbol.for("react.block"):60121,P=m?Symbol.for("react.fundamental"):60117,E=m?Symbol.for("react.responder"):60118,k=m?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case b:switch(e=e.type){case v:case w:case g:case j:case x:case N:return e;default:switch(e=e&&e.$$typeof){case y:case O:case C:case _:case h:return e;default:return t}}case f:return t}}}function A(e){return $(e)===w}var M={AsyncMode:v,ConcurrentMode:w,ContextConsumer:y,ContextProvider:h,Element:b,ForwardRef:O,Fragment:g,Lazy:C,Memo:_,Portal:f,Profiler:j,StrictMode:x,Suspense:N,isAsyncMode:function(e){return A(e)||$(e)===v},isConcurrentMode:A,isContextConsumer:function(e){return $(e)===y},isContextProvider:function(e){return $(e)===h},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b},isForwardRef:function(e){return $(e)===O},isFragment:function(e){return $(e)===g},isLazy:function(e){return $(e)===C},isMemo:function(e){return $(e)===_},isPortal:function(e){return $(e)===f},isProfiler:function(e){return $(e)===j},isStrictMode:function(e){return $(e)===x},isSuspense:function(e){return $(e)===N},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===g||e===w||e===j||e===x||e===N||e===S||"object"==typeof e&&null!==e&&(e.$$typeof===C||e.$$typeof===_||e.$$typeof===h||e.$$typeof===y||e.$$typeof===O||e.$$typeof===P||e.$$typeof===E||e.$$typeof===k||e.$$typeof===R)},typeOf:$},z=p((function(e,t){})),T=(z.AsyncMode,z.ConcurrentMode,z.ContextConsumer,z.ContextProvider,z.Element,z.ForwardRef,z.Fragment,z.Lazy,z.Memo,z.Portal,z.Profiler,z.StrictMode,z.Suspense,z.isAsyncMode,z.isConcurrentMode,z.isContextConsumer,z.isContextProvider,z.isElement,z.isForwardRef,z.isFragment,z.isLazy,z.isMemo,z.isPortal,z.isProfiler,z.isStrictMode,z.isSuspense,z.isValidElementType,z.typeOf,p((function(e){e.exports=M}))),L={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I={};I[T.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},I[T.Memo]=L;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype},238:function(e,t,r){"use strict";var a=r(0);var n=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))}));t.a=n}}]);