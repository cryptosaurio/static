/*! For license information please see 21.7d863194.chunk.js.LICENSE.txt */
(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[21],{146:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r,a){return new(r||(r=Promise))((function(n,o){function s(e){try{i(a.next(e))}catch(e){o(e)}}function c(e){try{i(a.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,c)}i((a=a.apply(e,t||[])).next())}))}function s(e,t){var r,a,n,o,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,a=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){s.label=o[1];break}if(6===o[0]&&s.label<n[1]){s.label=n[1],n=o;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(o);break}n[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}var c,i=function(e){console.warn(e)};(c||(c={})).SCRIPT_NOT_AVAILABLE="Recaptcha script is not available";var l=Object(a.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});l.Consumer;function u(e){var t=this,r=e.reCaptchaKey,u=e.useEnterprise,d=void 0!==u&&u,p=e.useRecaptchaNet,m=void 0!==p&&p,b=e.scriptProps,g=e.language,f=e.children,j=Object(a.useState)(null),x=j[0],h=j[1];Object(a.useEffect)((function(){if(r){var e=(null==b?void 0:b.id)||"google-recaptcha-v3";return function(e){var t=e.reCaptchaKey,r=e.language,a=e.onLoad,n=e.useRecaptchaNet,o=e.useEnterprise,s=e.scriptProps,c=void 0===s?{}:s,i=c.nonce,l=void 0===i?"":i,u=c.defer,d=void 0!==u&&u,p=c.async,m=void 0!==p&&p,b=c.id,g=void 0===b?"":b,f=c.appendTo,j=void 0===f?void 0:f,x=g||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(x))a();else{var h=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:o,useRecaptchaNet:n}),y=document.createElement("script");y.id=x,y.src=h+"?render="+t+(r?"&hl="+r:""),l&&(y.nonce=l),y.defer=!!d,y.async=!!m,y.onload=a,("body"===j?document.body:document.getElementsByTagName("head")[0]).appendChild(y)}}({reCaptchaKey:r,useEnterprise:d,useRecaptchaNet:m,scriptProps:b,language:g,onLoad:function(){if(window&&window.grecaptcha){var e=d?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){h(e)}))}else i("<GoogleRecaptchaProvider /> "+c.SCRIPT_NOT_AVAILABLE)},onError:function(){i("Error loading google recaptcha script")}}),function(){!function(e){var t=document.querySelector(".grecaptcha-badge");t&&t.parentNode&&document.body.removeChild(t.parentNode);var r=document.querySelector("#"+e);r&&r.remove(),function(){var e=document.querySelector("script[src^='https://www.gstatic.com/recaptcha/releases']");e&&e.remove()}()}(e)}}i("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[d,m,b,g,r]);var y=Object(a.useCallback)((function(e){return o(t,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:if(!x||!x.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return[4,x.execute(r,{action:e})];case 1:return[2,t.sent()]}}))}))}),[x]),w=Object(a.useMemo)((function(){return{executeRecaptcha:x?y:void 0}}),[y,x]);return n.a.createElement(l.Provider,{value:w},f)}var d=function(){return Object(a.useContext)(l)};function p(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"==typeof Symbol&&Symbol.for,b=m?Symbol.for("react.element"):60103,g=m?Symbol.for("react.portal"):60106,f=m?Symbol.for("react.fragment"):60107,j=m?Symbol.for("react.strict_mode"):60108,x=m?Symbol.for("react.profiler"):60114,h=m?Symbol.for("react.provider"):60109,y=m?Symbol.for("react.context"):60110,w=m?Symbol.for("react.async_mode"):60111,v=m?Symbol.for("react.concurrent_mode"):60111,O=m?Symbol.for("react.forward_ref"):60112,N=m?Symbol.for("react.suspense"):60113,S=m?Symbol.for("react.suspense_list"):60120,C=m?Symbol.for("react.memo"):60115,P=m?Symbol.for("react.lazy"):60116,_=m?Symbol.for("react.block"):60121,R=m?Symbol.for("react.fundamental"):60117,k=m?Symbol.for("react.responder"):60118,$=m?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case b:switch(e=e.type){case w:case v:case f:case x:case j:case N:return e;default:switch(e=e&&e.$$typeof){case y:case O:case P:case C:case h:return e;default:return t}}case g:return t}}}function M(e){return E(e)===v}var A={AsyncMode:w,ConcurrentMode:v,ContextConsumer:y,ContextProvider:h,Element:b,ForwardRef:O,Fragment:f,Lazy:P,Memo:C,Portal:g,Profiler:x,StrictMode:j,Suspense:N,isAsyncMode:function(e){return M(e)||E(e)===w},isConcurrentMode:M,isContextConsumer:function(e){return E(e)===y},isContextProvider:function(e){return E(e)===h},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===b},isForwardRef:function(e){return E(e)===O},isFragment:function(e){return E(e)===f},isLazy:function(e){return E(e)===P},isMemo:function(e){return E(e)===C},isPortal:function(e){return E(e)===g},isProfiler:function(e){return E(e)===x},isStrictMode:function(e){return E(e)===j},isSuspense:function(e){return E(e)===N},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===f||e===v||e===x||e===j||e===N||e===S||"object"==typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===C||e.$$typeof===h||e.$$typeof===y||e.$$typeof===O||e.$$typeof===R||e.$$typeof===k||e.$$typeof===$||e.$$typeof===_)},typeOf:E},T=p((function(e,t){})),L=(T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense,T.isValidElementType,T.typeOf,p((function(e){e.exports=A}))),z={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},F={};F[L.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},F[L.Memo]=z;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype},265:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var a=r(42),n=r(5),o=r(0),s=r.n(o),c=r(8),i=r(123),l=r(146),u=r(41),d=r(1),p=s.a.lazy((function(){return Promise.all([r.e(3),r.e(5)]).then(r.bind(null,177))}));function m(){return Object(d.jsx)(l.a,{reCaptchaKey:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI",children:Object(d.jsx)(b,{})})}function b(){var e={page:"ranking",country:window.COUNTRY},t=Object(u.useTracking)(e).trackEvent,r=Object(i.a)().t,s=Object(l.b)().executeRecaptcha;Object(o.useEffect)((function(){var r={event:"pageview"};"production"===window.ENV?t(r):console.log(e,r)}),[]);var m=Object(o.useState)([]),b=Object(n.a)(m,2),g=b[0],f=b[1],j=Object(o.useState)(null),x=Object(n.a)(j,2),h=x[0],y=x[1],w=Object(o.useState)(null),v=Object(n.a)(w,2),O=v[0],N=v[1],S=Object(o.useState)(!1),C=Object(n.a)(S,2),P=C[0],_=C[1],R=Object(o.useState)(""),k=Object(n.a)(R,2),$=k[0],E=k[1];return Object(o.useEffect)((function(){fetch("https://barney.cryptosaurio.com/".concat(window.COUNTRY,"/reviews/summarized-reviews-info?merge_p2p=true")).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return 1===e.enabled})).sort((function(e,t){return t.rating-e.rating})),r=t.filter((function(e){return-1===e.provider_id.indexOf("p2p")}));f(t);var n=t[0],o=Object(a.a)(t).sort((function(e,t){return t.average_support_rating-e.average_support_rating}))[0],s=Object(a.a)(r).sort((function(e,t){return t.average_transfer_speed_rating-e.average_transfer_speed_rating}))[0],c=Object(a.a)(t).sort((function(e,t){return t.average_usability_rating-e.average_usability_rating}))[0],i=Object(a.a)(r).sort((function(e,t){return t.average_arbitrage_quality-e.average_arbitrage_quality}))[0],l=Object(a.a)(t).sort((function(e,t){return t.count-e.count}))[0];y({overall:n,support:o,transferSpeed:s,usability:c,arbitrageQuality:i,mostReviewed:l})})).catch((function(){f([])}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"mx-5 mt-5",children:[Object(d.jsx)("h1",{className:"text-2xl",children:r("Ranking")}),Object(d.jsx)("h2",{className:"text-lg pt-3",children:r("\xbfTe preguntabas cu\xe1l es la mejor plataforma donde comprar criptomonedas?")}),Object(d.jsx)("h2",{className:"text-lg pt-3",children:r("Para ayudarte a decidir, ordenamos las plataformas de {{countryName}} seg\xfan las opiniones de nuestros usuarios. \xa1An\xedmate tu tambi\xe9n y suma tu experiencia!",{countryName:window.COUNTRY_NAME})})]}),h&&Object(d.jsxs)("div",{className:"grid md:grid-cols-4 gap-5 text-center p-4",children:[Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("img",{src:"/static/img/overall-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(d.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("con"))," ",Object(d.jsx)("p",{className:"font-bold",children:r("mejor promedio")})]}),Object(d.jsx)("a",{className:"text-blue-400",href:h.overall.url,target:"_blank",rel:"sponsored noreferrer",children:h.overall.name})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("img",{src:"/static/img/most-reviews-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(d.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("con"))," ",Object(d.jsx)("p",{className:"font-bold",children:"".concat(r("m\xe1s")," ").concat(r("opiniones"))})]}),Object(d.jsx)("a",{className:"text-blue-400",href:h.mostReviewed.url,target:"_blank",rel:"sponsored noreferrer",children:h.mostReviewed.name})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("img",{src:"/static/img/arbitrage-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(d.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("m\xe1s"))," ",Object(d.jsx)("p",{className:"font-bold",children:r("recomendada para arbitrar")})]}),Object(d.jsx)("a",{className:"text-blue-400",href:h.arbitrageQuality.url,target:"_blank",rel:"sponsored noreferrer",children:h.arbitrageQuality.name})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("img",{src:"/static/img/transfer-speed-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(d.jsxs)("h2",{children:[r("Plataforma")," ",Object(d.jsx)("p",{className:"font-bold",children:r("m\xe1s r\xe1pida")})]}),Object(d.jsx)("a",{className:"text-blue-400",href:h.transferSpeed.url,target:"_blank",rel:"sponsored noreferrer",children:h.transferSpeed.name})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("img",{src:"/static/img/usability-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(d.jsxs)("h2",{children:[r("Plataforma")," ",Object(d.jsx)("p",{className:"font-bold",children:r("m\xe1s f\xe1cil de usar")})]}),Object(d.jsx)("a",{className:"text-blue-400",href:h.usability.url,target:"_blank",rel:"sponsored noreferrer",children:h.usability.name})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("img",{src:"/static/img/support-rating-dino.webp",loading:"lazy",className:"w-20 h-20 m-auto"}),Object(d.jsxs)("h2",{children:["".concat(r("Plataforma")," ").concat(r("con"))," ",Object(d.jsx)("p",{className:"font-bold",children:r("mejor atenci\xf3n")})]}),Object(d.jsx)("a",{className:"text-blue-400",href:h.support.url,target:"_blank",rel:"sponsored noreferrer",children:h.support.name})]})]}),!h&&Object(d.jsxs)("div",{className:"grid md:grid-cols-4 gap-5 text-center p-4",children:[Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(d.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-14 h-5 animate-pulse m-auto"})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(d.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-48 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-14 h-5 animate-pulse m-auto"})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(d.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-48 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-14 h-5 animate-pulse m-auto"})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(d.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-48 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-14 h-5 animate-pulse m-auto"})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(d.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-48 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-14 h-5 animate-pulse m-auto"})]}),Object(d.jsxs)("div",{className:"grid grid-flow-row gap-2 bg-gray-700 py-3.5 px-3 sm:px-6 lg:px-8 rounded-lg col-span-1",children:[Object(d.jsx)("div",{className:"w-20 h-20 m-auto bg-gray-800 animate-pulse"}),Object(d.jsx)("div",{className:"bg-gray-800 w-32 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-48 h-5 animate-pulse m-auto"}),Object(d.jsx)("div",{className:"bg-gray-800 w-14 h-5 animate-pulse m-auto"})]})]}),Object(d.jsxs)("div",{className:"mx-5 mt-5",children:[Object(d.jsxs)("div",{className:"relative text-gray-600 focus-within:text-gray-400",children:[Object(d.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:Object(d.jsx)("button",{className:"p-1 focus:outline-none focus:shadow-outline",children:Object(d.jsx)(c.w,{className:"w-5 h-5"})})}),Object(d.jsx)("input",{type:"search",name:"q",className:"py-2 w-56 text-sm text-white bg-gray-800 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900",placeholder:r("Buscar una plataforma"),autoComplete:"off",value:$,onChange:function(e){return E(e.target.value.toLowerCase())}})]}),g.length>0&&Object(d.jsx)("div",{className:"flex flex-row flex-wrap gap-3 py-5",children:g.filter((function(e){return e.name.toLowerCase().includes($)})).map((function(e,t){return Object(d.jsxs)("div",{className:"flex flex-row w-72",children:[Object(d.jsx)("div",{className:"text-8xl font-extrabold text-gray-700 w-28 mr-1 text-right flex-shrink-0",children:t+1}),Object(d.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2 rounded-r-lg self-end py-2",children:[Object(d.jsx)("a",{href:e.url,target:"_blank",rel:"sponsored noreferrer",className:"font-bold hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.name}),Object(d.jsxs)("span",{className:"flex rounded-lg px-3 bg-gray-700 text-white items-center w-max",children:[Object(d.jsx)(c.B,{className:"w-5 h-5 mr-1 text-blue-400","aria-hidden":"true"}),e.rating||"-"]}),e.rating&&Object(d.jsx)("a",{className:"text-blue-400 underline cursor-pointer",href:"/".concat("br"!=window.COUNTRY?window.COUNTRY:"").concat(r("/opiniones/")).concat(e.provider_id),target:"_blank",rel:"noreferrer",children:1==e.count?r("Ver {{reviewCount}} opinion",{reviewCount:e.count}):r("Ver {{reviewCount}} opiniones",{reviewCount:e.count})})||Object(d.jsx)("p",{className:"text-blue-400 underline cursor-pointer",onClick:function(){N(e),_(!0)},children:r("Opinar")})]})]},t)}))})]}),P&&Object(d.jsx)(o.Suspense,{fallback:Object(d.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:Object(d.jsx)("div",{className:"min-h-screen px-4",children:Object(d.jsx)("div",{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"})})}),children:Object(d.jsx)(p,{reviewModalIsOpen:P,executeRecaptcha:s,setReviewModalIsOpen:_,selectedProvider:O,setSelectedProvider:N,providerList:g,alreadyRecommended:[],setAlreadyRecommended:function(){}})}),0===g.length&&Object(d.jsx)("div",{className:"mx-5 mt-5",children:Object(d.jsx)("div",{className:"flex flex-row flex-wrap gap-3",children:Object(a.a)(Array(25)).map((function(e,t){return Object(d.jsxs)("div",{className:"flex flex-row cursor-pointer w-72",children:[Object(d.jsx)("div",{className:"text-8xl font-extrabold text-gray-700 w-28 mr-1 text-right flex-shrink-0 animate-pulse",children:t+1}),Object(d.jsxs)("div",{className:"flex flex-col gap-2 w-full border border-1 border-gray-700 pl-2 pt-3 pb-4 rounded-r-lg",children:[Object(d.jsx)("div",{className:"bg-gray-700 w-16 h-5 animate-pulse"}),Object(d.jsx)("div",{className:"rounded-lg px-3 bg-gray-700 w-20 h-5 animate-pulse"}),Object(d.jsx)("div",{className:"bg-gray-700 w-36 h-5 animate-pulse"})]})]},t)}))})})]})}}}]);