(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[12],{139:function(e,t,n){},140:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(1);function i(e){var t=e.active,n=e.onClick;return Object(a.jsx)("li",{className:"inline-block",onClick:function(){return n&&n()},children:Object(a.jsx)("label",{className:["cursor-pointer block text-4xl text-white",t||"text-gray-700"].join(" "),children:"\u2022"})})}var s=function(e,t){return e.active===t.active};t.a=c.a.memo(i,s)},141:function(e,t,n){"use strict";function r(){return{responsive:{desktop:{breakpoint:{max:9999,min:769},items:2},mobile:{breakpoint:{max:768,min:0},items:1}},fixed:{desktop:{breakpoint:{max:9999,min:0},items:1}}}}n.d(t,"a",(function(){return r}))},143:function(e,t,n){"use strict";var r=n(0),c=n.n(r),a=n(48),i=n(146),s=n.n(i),o=(n(147),n(139),n(52)),l=n(140),d=n(141),u=n(1);function b(e){var t=e.location,n={page:t,country:window.COUNTRY},r=Object(a.useTracking)(n),c=(r.Track,r.trackEvent),i=Object(o.a)(window.COUNTRY,t,"opportunityBanner");return"home"===t&&(i=i.slice(0,1)),(i=i.sort((function(){return.5-Math.random()}))).forEach((function(e){var t={event:"system_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"show"};"production"===window.ENV?c(t):console.log(n,t)})),Object(u.jsx)(s.a,{className:"rolls-carousel",responsive:Object(d.a)().fixed,renderDotsOutside:!0,showDots:i.length>1,infinite:i.length>1,autoPlay:i.length>1,autoPlaySpeed:4e3,customDot:Object(u.jsx)(l.a,{}),arrows:!1,children:i.map((function(e,t){var r={event:"user_action",event_category:"".concat(e.provider,"_").concat(e.location,"_").concat(e.type),event_label:"click"};return Object(u.jsxs)("picture",{onClick:function(){"production"===window.ENV?c(r):console.log(n,r),window.open(e.sponsoredUrl)},children:[Object(u.jsx)("source",{srcSet:e.mobileImgUrl,media:"(max-width: 639px)",width:"400",height:e.mobileImgHeightOverride||"100"}),Object(u.jsx)("source",{srcSet:e.desktopImgUrl,media:"(min-width: 640px)",width:"820",height:e.desktopImgHeightOverride||"100"}),Object(u.jsx)("img",{className:"cursor-pointer mx-auto my-2",src:e.desktopImgUrl,width:"820",height:e.desktopImgHeightOverride||"100"})]},t)}))})}t.a=c.a.memo(b,(function(){return!0}))},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r,c,a=n(2),i=n(0),s=n.n(i),o=n(13),l=n(4),d=n(38),u=n(6),b=n(7),p=n(25),j=n(37),m=n(55);!function(e){e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.SetOrientation=1]="SetOrientation",e[e.SetActivation=2]="SetActivation",e[e.RegisterTab=3]="RegisterTab",e[e.UnregisterTab=4]="UnregisterTab",e[e.RegisterPanel=5]="RegisterPanel",e[e.UnregisterPanel=6]="UnregisterPanel",e[e.ForceRerender=7]="ForceRerender"}(c||(c={}));var f=((r={})[c.SetSelectedIndex]=function(e,t){return e.selectedIndex===t.index?e:Object(a.b)({},e,{selectedIndex:t.index})},r[c.SetOrientation]=function(e,t){return e.orientation===t.orientation?e:Object(a.b)({},e,{orientation:t.orientation})},r[c.SetActivation]=function(e,t){return e.activation===t.activation?e:Object(a.b)({},e,{activation:t.activation})},r[c.RegisterTab]=function(e,t){return e.tabs.includes(t.tab)?e:Object(a.b)({},e,{tabs:[].concat(e.tabs,[t.tab])})},r[c.UnregisterTab]=function(e,t){return Object(a.b)({},e,{tabs:e.tabs.filter((function(e){return e!==t.tab}))})},r[c.RegisterPanel]=function(e,t){return e.panels.includes(t.panel)?e:Object(a.b)({},e,{panels:[].concat(e.panels,[t.panel])})},r[c.UnregisterPanel]=function(e,t){return Object(a.b)({},e,{panels:e.panels.filter((function(e){return e!==t.panel}))})},r[c.ForceRerender]=function(e){return Object(a.b)({},e)},r),O=Object(i.createContext)(null);function x(e){var t=Object(i.useContext)(O);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Tab.Group /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,x),n}return t}function h(e,t){return Object(o.a)(t.type,f,e,t)}O.displayName="TabsContext";var v=i.Fragment;function g(e){var t,n,r="headlessui-tabs-tab-"+Object(p.a)(),s=x(g.name),f=s[0],O=f.selectedIndex,h=f.tabs,v=f.panels,w=f.orientation,y=f.activation,N=s[1],k=N.dispatch,C=N.change,S=Object(i.useRef)(null),P=Object(d.a)(S,(function(e){e&&k({type:c.ForceRerender})}));Object(b.a)((function(){return k({type:c.RegisterTab,tab:S}),function(){return k({type:c.UnregisterTab,tab:S})}}),[k,S]);var T=h.indexOf(S),U=T===O,R=Object(i.useCallback)((function(e){var t=h.map((function(e){return e.current})).filter(Boolean);if(e.key===u.a.Space||e.key===u.a.Enter)return e.preventDefault(),e.stopPropagation(),void C(T);switch(e.key){case u.a.Home:case u.a.PageUp:return e.preventDefault(),e.stopPropagation(),Object(j.e)(t,j.a.First);case u.a.End:case u.a.PageDown:return e.preventDefault(),e.stopPropagation(),Object(j.e)(t,j.a.Last)}return Object(o.a)(w,{vertical:function(){return e.key===u.a.ArrowUp?Object(j.e)(t,j.a.Previous|j.a.WrapAround):e.key===u.a.ArrowDown?Object(j.e)(t,j.a.Next|j.a.WrapAround):void 0},horizontal:function(){return e.key===u.a.ArrowLeft?Object(j.e)(t,j.a.Previous|j.a.WrapAround):e.key===u.a.ArrowRight?Object(j.e)(t,j.a.Next|j.a.WrapAround):void 0}})}),[h,w,T,C]),_=Object(i.useCallback)((function(){var e;null==(e=S.current)||e.focus()}),[S]),I=Object(i.useCallback)((function(){var e;null==(e=S.current)||e.focus(),C(T)}),[C,T,S]),E=Object(i.useMemo)((function(){return{selected:U}}),[U]),A={ref:P,onKeyDown:R,onFocus:"manual"===y?_:I,onClick:I,id:r,role:"tab",type:Object(m.a)(e,S),"aria-controls":null==(t=v[T])||null==(n=t.current)?void 0:n.id,"aria-selected":U,tabIndex:U?0:-1},D=e;return Object(l.d)({props:Object(a.b)({},D,A),slot:E,defaultTag:"button",name:"Tabs.Tab"})}var w=l.a.RenderStrategy|l.a.Static;g.Group=function(e){var t=e.defaultIndex,n=void 0===t?0:t,r=e.vertical,o=void 0!==r&&r,d=e.manual,u=void 0!==d&&d,b=e.onChange,p=Object(a.c)(e,["defaultIndex","vertical","manual","onChange"]),j=o?"vertical":"horizontal",m=u?"manual":"auto",f=Object(i.useReducer)(h,{selectedIndex:null,tabs:[],panels:[],orientation:j,activation:m}),x=f[0],g=f[1],w=Object(i.useMemo)((function(){return{selectedIndex:x.selectedIndex}}),[x.selectedIndex]),y=Object(i.useRef)((function(){}));Object(i.useEffect)((function(){g({type:c.SetOrientation,orientation:j})}),[j]),Object(i.useEffect)((function(){g({type:c.SetActivation,activation:m})}),[m]),Object(i.useEffect)((function(){"function"===typeof b&&(y.current=b)}),[b]),Object(i.useEffect)((function(){if(!(x.tabs.length<=0)&&null===x.selectedIndex){var e=x.tabs.map((function(e){return e.current})).filter(Boolean),t=e.filter((function(e){return!e.hasAttribute("disabled")}));if(n<0)g({type:c.SetSelectedIndex,index:e.indexOf(t[0])});else if(n>x.tabs.length)g({type:c.SetSelectedIndex,index:e.indexOf(t[t.length-1])});else{var r=e.slice(0,n),a=e.slice(n),i=[].concat(a,r).find((function(e){return t.includes(e)}));if(!i)return;g({type:c.SetSelectedIndex,index:e.indexOf(i)})}}}),[n,x.tabs,x.selectedIndex]);var N=Object(i.useRef)(x.selectedIndex),k=Object(i.useMemo)((function(){return[x,{dispatch:g,change:function(e){N.current!==e&&y.current(e),N.current=e,g({type:c.SetSelectedIndex,index:e})}}]}),[x,g]);return s.a.createElement(O.Provider,{value:k},Object(l.d)({props:Object(a.b)({},p),slot:w,defaultTag:v,name:"Tabs"}))},g.List=function e(t){var n=x([g.name,e.name].join("."))[0],r={selectedIndex:n.selectedIndex},c={role:"tablist","aria-orientation":n.orientation},i=t;return Object(l.d)({props:Object(a.b)({},i,c),slot:r,defaultTag:"div",name:"Tabs.List"})},g.Panels=function e(t){var n=x([g.name,e.name].join("."))[0].selectedIndex,r=Object(i.useMemo)((function(){return{selectedIndex:n}}),[n]);return Object(l.d)({props:t,slot:r,defaultTag:"div",name:"Tabs.Panels"})},g.Panel=function e(t){var n,r,s=x([g.name,e.name].join(".")),o=s[0],u=o.selectedIndex,j=o.tabs,m=o.panels,f=s[1].dispatch,O="headlessui-tabs-panel-"+Object(p.a)(),h=Object(i.useRef)(null),v=Object(d.a)(h,(function(e){e&&f({type:c.ForceRerender})}));Object(b.a)((function(){return f({type:c.RegisterPanel,panel:h}),function(){return f({type:c.UnregisterPanel,panel:h})}}),[f,h]);var y=m.indexOf(h),N=y===u,k=Object(i.useMemo)((function(){return{selected:N}}),[N]),C={ref:v,id:O,role:"tabpanel","aria-labelledby":null==(n=j[y])||null==(r=n.current)?void 0:r.id,tabIndex:N?0:-1},S=t;return Object(l.d)({props:Object(a.b)({},S,C),slot:k,defaultTag:"div",features:w,visible:N,name:"Tabs.Panel"})}},276:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var r,c,a=n(49),i=n(14),s=n(28),o=n(8),l=n(0),d=n.n(l),u=n(17),b=n(130),p=n(56),j=n(181),m=n(146),f=n.n(m),O=n(9),x=n(153),h=n(143),v=(n(147),n(141)),g=(n(139),["title","titleId"]);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function N(e,t){var n=e.title,a=e.titleId,i=y(e,g);return l.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",ref:t,"aria-labelledby":a},i),n?l.createElement("title",{id:a},n):null,r||(r=l.createElement("defs",null)),c||(c=l.createElement("path",{d:"M519 128l-47-48a56 56 0 00-40-16H205c-15 0-29 6-39 16l-48 48H0v256h64c18 0 32-15 32-32h9l85 76c30 25 73 26 105 4a61 61 0 0090-8c22 9 48 3 64-17l26-32c6-7 9-15 11-23h58c0 17 15 32 32 32h64V128H519zM48 352c-9 0-16-8-16-16s7-16 16-16 16 7 16 16-7 16-16 16zm390-7l-26 32c-3 3-8 4-11 1l-24-19-30 36c-6 8-15 5-18 3l-37-32-16 19a40 40 0 01-55 7l-97-88H96V176h42l62-62 5-2h57l-39 35a72 72 0 00-4 102c15 16 61 41 101 4l9-7 108 87c3 3 4 8 1 12zm106-41h-69l-8-8-103-83 13-12c6-6 7-16 1-22l-11-12c-6-6-16-7-23-1l-55 51c-9 8-26 9-34 0-10-10-9-25 1-34l65-60c8-7 17-11 27-11h84l6 2 61 62h45v128zm48 48c-9 0-16-8-16-16s7-16 16-16 16 7 16 16-7 16-16 16z"})))}var k,C=l.forwardRef(N),S=(n.p,n(24)),P=n(22),T=n(140),U=n(48),R=n(1),_=d.a.lazy((function(){return n.e(18).then(n.bind(null,271))}));function I(e){var t={page:"p2p",country:window.COUNTRY},n=Object(U.useTracking)(t),r=(n.Track,n.trackEvent),c=Object(b.a)().t;Object(l.useEffect)((function(){var e={event:"pageview"};"production"===window.ENV?r(e):console.log(t,e)}),[]);var d=Object(l.useState)({}),m=Object(o.a)(d,2),g=m[0],w=m[1],y=Object(l.useState)({}),N=Object(o.a)(y,2),I=N[0],E=N[1],A=Object(l.useState)({}),D=Object(o.a)(A,2),B=D[0],L=D[1],Y=Object(l.useState)([]),M=Object(o.a)(Y,2),V=M[0],z=M[1],F=Object(l.useState)(""),H=Object(o.a)(F,2),J=H[0],W=H[1],G=Object(l.useState)(Object(P.a)(e.match.params.coin).code.toLowerCase()||""),K=Object(o.a)(G,2),$=K[0],q=K[1],Q=Object(l.useState)(!1),X=Object(o.a)(Q,2),Z=X[0],ee=X[1],te=Object(l.useState)({}),ne=Object(o.a)(te,2),re=ne[0],ce=ne[1],ae=Object(l.useState)(10),ie=Object(o.a)(ae,2),se=ie[0],oe=ie[1],le=Object(l.useState)(k.ByCoin),de=Object(o.a)(le,2),ue=de[0],be=de[1],pe=Object(l.useState)([]),je=Object(o.a)(pe,2),me=je[0],fe=je[1],Oe=Object(l.useState)([]),xe=Object(o.a)(Oe,2),he=xe[0],ve=xe[1],ge=Object(l.useState)(!1),we=Object(o.a)(ge,2),ye=we[0],Ne=we[1];function ke(e){var t=JSON.parse(JSON.stringify(e));if(ue===k.ByCoin)for(var n in t)J&&n in t&&t[n]&&t[n].offers&&J in t[n].offers.fields.providers&&(t[n].offers.fields.providers=Object(s.a)({},J,{ask:(t[n].offers.fields.providers[J].ask||[]).filter((function(e){return-1===he.indexOf(e.provider_id)})),bid:(t[n].offers.fields.providers[J].bid||"bid").filter((function(e){return-1===he.indexOf(e.provider_id)}))}));else if(ue===k.ByProvider)for(var r in t)for(var c in t[r])he.indexOf("".concat(c,"p2p"))>-1&&delete t[r][c];return Object(i.a)({},t)}return Object(l.useEffect)((function(){e.match.params.coin||Z?(e.crumbs[1].name="".concat(c("Comparador P2P de {{coinName}}",{coinName:Object(P.a)($).name})),e.setCrumbs(e.crumbs)):e.setCrumbs([])}),[$,Z]),Object(l.useEffect)((function(){var e=Object(S.a)();z(e.available_currencies);var t=e.available_currencies[0];W(t)}),[]),Object(p.a)((function(){fetch("br"!==window.COUNTRY?"".concat(window.API_URL,"/").concat(window.COUNTRY,"/p2p-data?viewType=").concat(k[ue]):"".concat(window.BR_API_URL,"/p2p-data?viewType=").concat(k[ue])).then((function(e){return e.json()})).then((function(e){(!$||$&&-1===Object.keys(e.offers).indexOf(Object(P.a)($).code.toLowerCase()))&&(q(Object.keys(e.offers)[0]),history.pushState({},document.title,"br"!==window.COUNTRY?"/".concat(window.COUNTRY,"/comparador-p2p/"):"/comparador-p2p/")),fe(e.providers),w(e.offers),E(ke(e.offers))})).catch((function(){return E({})}))}),6e4,!1,ue),Object(l.useEffect)((function(){Object.values(g).length>0&&E(ke(g))}),[g,J,he]),Object(p.a)((function(){ue===k.ByCoin&&$&&-1===["?","DAI","USDC","USDT","BUSD"].indexOf($.toUpperCase())?fetch("".concat(window.API_URL,"/").concat(window.COUNTRY,"/coin-stats/").concat($,"?simple=true")).then((function(e){return e.json()})).then((function(e){return L(e)})).catch((function(){return L({})})):L({})}),6e4,!1,ue,$),Object(l.useEffect)((function(){oe(ue===k.ByCoin?10:4)}),[ue]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(h.a,{location:"p2p"}),Object(R.jsxs)(j.a.Group,{defaultIndex:Object.keys(I).indexOf($),onChange:function(e){q(Object.keys(I)[e]),ee(!0),history.pushState({},document.title,"br"!==window.COUNTRY?"/".concat(window.COUNTRY,"/comparador-p2p/").concat(Object(P.a)(Object.keys(I)[e].toUpperCase()).name.split(" ").join("-").toLowerCase()):"/comparador-p2p/".concat(Object(P.a)(Object.keys(I)[e].toUpperCase()).name.split(" ").join("-").toLowerCase()))},children:[Object(R.jsxs)(j.a.List,{className:"flex p-1 space-x-1 xl:ml-52 xl:mr-52 bg-gray-800 sticky top-0 z-10 overflow-x-auto no-scrollbar",children:[Object.keys(I).map((function(e,t){return Object(R.jsx)(j.a,{className:function(e){return["min-w-max p-2.5 sm:w-full text-sm font-medium flex justify-center",e.selected&&"border-b-2 border-blue-400"].join(" ")},children:Object(R.jsxs)("h2",{className:"flex",children:[Object(R.jsx)("img",{src:Object(P.a)(e.toUpperCase()).icon,className:"w-5 mr-1"}),Object(R.jsx)("a",{target:"_blank",rel:"noreferrer",href:"br"!==window.COUNTRY?"/".concat(window.COUNTRY,"/comparador-p2p/").concat(Object(P.a)(Object.keys(I)[t].toUpperCase()).name.split(" ").join("-").toLowerCase()):"/comparador-p2p/".concat(Object(P.a)(Object.keys(I)[t].toUpperCase()).name.split(" ").join("-").toLowerCase()),onClick:function(e){return e.preventDefault()},children:Object(P.a)(e.toUpperCase()).name})]})},t)})),0===Object.keys(I).length&&Object(a.a)(Array(5)).map((function(e,t){return Object(R.jsx)("div",{className:"animate-pulse w-screen h-12 bg-gray-700"},t)}))]}),$&&Object(R.jsxs)("h2",{className:"px-5 pt-5 xl:px-0 xl:pt-5 xl:mx-52",children:[c("Compara f\xe1cilmente anuncios P2P de {{coin}} en distintas plataformas y elige el m\xe1s conveniente. Para tener una mejor experiencia,",{coin:Object(P.a)($.toUpperCase()).name})," ",Object(R.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline text-blue-400 hover:text-blue-600",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/blog/").concat(c("tips-para-operar-p2p")),children:c("te acercamos algunos consejos para operar P2P")}),"."]}),Object(R.jsxs)("p",{onClick:function(){return Ne(!0)},className:"mt-8 pl-5 xl:pl-0 xl:ml-52 cursor-pointer inline-flex items-center",children:[Object(R.jsx)(O.b,{className:"inline-block fill-current w-5 h-5 align-text-top mr-1"}),c("Preferencias")]}),ye&&Object(R.jsx)(l.Suspense,{fallback:Object(R.jsx)("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:Object(R.jsx)("div",{className:"min-h-screen px-4",children:Object(R.jsx)("div",{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"})})}),children:Object(R.jsx)(_,{preferencesModalIsOpen:ye,setPreferencesModalIsOpen:Ne,providerList:me,setP2PData:E,viewType:ue,setViewType:be,blockedProviders:he,setBlockedProviders:ve,selectedCurrency:J,setSelectedCurrency:W,availableCurrencies:V})}),Object(R.jsxs)(j.a.Panels,{className:"mt-2 pb-5",children:[Object.values(I).map((function(e,t){return Object(R.jsx)(j.a.Panel,{children:Object.values(e).map((function(e,t){return Object(R.jsxs)("div",{className:["flex flex-col xl:ml-52 xl:mr-52 border-2 border-gray-600 overflow-x-auto",t>0?"mt-8":"mt-1"].join(" "),children:[Object(R.jsx)("div",{className:"bg-gray-600",children:Object(R.jsx)("div",{className:"py-3 px-3 sm:px-6 lg:px-8",children:ue===k.ByProvider&&Object(R.jsxs)("span",{className:"text-white flex items-center",children:[Object(R.jsx)("img",{className:"w-5 mr-1",src:e.fields.icon}),Object(R.jsx)("a",{className:"font-medium",href:e.fields.url,target:"_blank",rel:"sponsored noreferrer",children:e.fields.name&&e.fields.name.replace(/ P2P/,"")}),e.fields.score&&e.fields.score.count>0&&Object(R.jsxs)("p",{className:"ml-1 font-light text-gray-400",children:[e.fields.score.rating,Object(R.jsx)(O.B,{className:"inline-block fill-current w-5 h-5 align-text-top"}),Object(R.jsx)("a",{className:"ml-1 underline",href:"".concat("br"!=window.COUNTRY?"/"+window.COUNTRY:"","/").concat(c("opiniones"),"/").concat(e.fields.id),children:c("Ver opiniones")})]})]})||Object(R.jsxs)("div",{className:"grid grid-flow-row",children:[Object(R.jsxs)("span",{className:"text-white flex items-center",children:[Object(R.jsx)("img",{className:"w-5 mr-1",src:e.fields.coin_icon}),Object(R.jsx)("h3",{className:"text-lg",children:e.fields.coin})]}),Object(R.jsxs)("div",{className:"flex my-1",children:[B.price&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("p",{className:"font-bold",children:["USD $ ",B.price]}),Object(R.jsx)("span",{className:["self-center mx-3 px-2 shadow-md rounded-full font-semibold text-sm",B.price_change_percentage_24h.indexOf("-")>-1?"bg-red-500":"bg-green-500"].join(" "),children:B.price_change_percentage_24h})]}),Object(R.jsx)(u.b,{className:"underline",to:"/".concat("br"!==window.COUNTRY?"criptomoneda":"criptomoeda","/").concat(Object(P.a)($.toUpperCase()).name.split(" ").join("-").toLowerCase()),children:c("Ver estad\xedsticas")})]})]})})}),Object(R.jsx)("div",{className:"py-2 align-middle inline-block",children:Object(R.jsx)("div",{className:"border-gray-200",children:Object(R.jsx)(f.a,{responsive:Object(v.a)().responsive,arrows:!1,showDots:!0,customDot:Object(R.jsx)(T.a,{}),children:Object(a.a)(Array("ask","bid")).map((function(t,n){return Object(R.jsx)("div",{className:"overflow-x-auto no-scrollbar",children:Object(R.jsxs)("table",{className:["mt-1 m-auto",J&&J in e.fields.providers&&(!(t in e.fields.providers[J])||0===e.fields.providers[J][t].length)&&"flex items-center justify-center mt-5"].join(" "),children:[J&&J in e.fields.providers&&t in e.fields.providers[J]&&e.fields.providers[J][t].length>0&&Object(R.jsxs)("thead",{children:[Object(R.jsx)("tr",{children:Object(R.jsx)("th",{children:Object(R.jsx)("span",{className:"ml-1 sm:ml-4 px-2 py-1 text-xs font-bold text-blue-50 bg-blue-400 rounded mb-3",children:"ask"===t&&c("VENDEDORES")||c("COMPRADORES")})})}),Object(R.jsxs)("tr",{children:[Object(R.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider"}),Object(R.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:c("PRECIO")}),e.fields.providers[J][t].filter((function(e){return e.limit})).length>0&&Object(R.jsx)("th",{scope:"col",className:"px-1 py-1 sm:px-5 sm:py-3 text-left text-xs font-medium uppercase tracking-wider",children:c("VOLUMEN")})]})]})||Object(R.jsx)("tbody",{children:Object(R.jsx)("tr",{children:Object(R.jsx)("td",{children:Object(R.jsx)("p",{children:c("No hay ".concat("ask"===t?"vendedores":"compradores"," en este momento..."))})})})}),J&&(J in e.fields.providers&&e.fields.providers[J][t]||[]).slice(0,!re["".concat($,"-").concat(e.fields.id,"-").concat(t)]&&se||J&&(J in e.fields.providers&&e.fields.providers[J][t]||[]).length).map((function(e,t){return Object(R.jsx)("tbody",{children:Object(R.jsxs)("tr",{children:[Object(R.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer min-w-min",children:Object(R.jsxs)("a",{className:"grid grid-flow-col",href:e.url,target:"_blank",rel:"sponsored noreferrer",children:[ue===k.ByCoin&&Object(R.jsx)("img",{className:"w-5 sm:w-7 mr-2 self-center",src:e.provider_icon,"data-tip":!0,"data-for":e.provider_name}),Object(R.jsx)(x.a,{effect:"solid",id:e.provider_name,children:e.provider_name.replace(/ P2P/,"")}),Object(R.jsxs)("div",{className:"w-24 text-sm self-center",children:[Object(R.jsxs)("span",{className:"flex",children:[Object(R.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.name}),e.pro_user&&Object(R.jsx)(O.c,{className:"inline-block fill-current text-yellow-400 w-5 h-5 align-bottom flex-shrink-0"})]}),0!=e.amount_of_orders&&Object(R.jsxs)("span",{className:"text-xs text-gray-400",children:[e.amount_of_orders," ",Object(R.jsx)(C,{className:"w-4 inline-block fill-current"})," ",e.success_rate,"%"]})]})]})}),Object(R.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3",children:Object(R.jsxs)("div",{className:"text-sm truncate w-32 grid grid-flow-row",children:[Object(R.jsx)("span",{children:e.price}),Object(R.jsx)("span",{className:"grid grid-flow-col gap-2 justify-start cursor-pointer text-gray-400 text-xs",children:Object(R.jsx)("p",{className:"truncate hover:overflow-clip hover:whitespace-normal hover:break-words",children:e.payment_methods.map((function(e){return e.name})).join(", ")})})]})}),e.limit&&Object(R.jsxs)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 grid grid-flow-row",children:[Object(R.jsxs)("span",{className:"text-sm truncate w-24",children:[e.limit," ",$.toUpperCase()]}),(e.limit_min||e.limit_max)&&Object(R.jsxs)("span",{className:"text-xs truncate hover:overflow-clip hover:whitespace-normal hover:overflow-visible w-24 text-gray-400 cursor-pointer",children:[e.limit_min&&c("M\xedn")+":"+String.fromCharCode(8239)+e.limit_min+" ",e.limit_max&&c("M\xe1x")+":"+String.fromCharCode(8239)+e.limit_max]})]})]})},t)})),J&&J in e.fields.providers&&t in e.fields.providers[J]&&e.fields.providers[J][t].length>se&&Object(R.jsx)("tbody",{onClick:function(){re["".concat($,"-").concat(e.fields.id,"-").concat(t)]=!re["".concat($,"-").concat(e.fields.id,"-").concat(t)],ce(Object(i.a)({},re))},children:Object(R.jsx)("tr",{children:Object(R.jsx)("td",{className:"px-1 py-1 sm:px-5 sm:py-3 cursor-pointer underline",children:!re["".concat($,"-").concat(e.fields.id,"-").concat(t)]&&c("Ver m\xe1s")||c("Ver menos")})})})]})},n)}))})})})]},t)}))},t)})),0===Object.values(I).length&&Object(a.a)(Array(3)).map((function(e,t){return Object(R.jsxs)("div",{className:["animate-pulse justify-between flex flex-row xl:ml-52 xl:mr-52 bg-gray-700 overflow-x-auto h-80",t>0?"mt-8":"mt-1"].join(" "),children:[Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-16"}),Object(R.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"}),Object(R.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mt-4"})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-16"}),Object(R.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"}),Object(R.jsx)("div",{className:"animate-pulse bg-gray-900 w-32 sm:w-96 h-14 ml-12 mr-12 mt-4"})]})]},t)}))]})]})]})}!function(e){e.ByProvider="ByProvider",e.ByCoin="ByCoin"}(k||(k={}))}}]);