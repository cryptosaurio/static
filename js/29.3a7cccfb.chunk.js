(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[29],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),c=n(133);function a(){var e=Object(r.useRef)(!1);return Object(c.a)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(8),c=n(0),a=n(140);function i(){var e=Object(c.useState)(a.a),t=Object(r.a)(e,1)[0];return Object(c.useEffect)((function(){return function(){return t.dispose()}}),[t]),t}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u}));var r=n(0),c=n.n(r),a=Object(r.createContext)(null);a.displayName="OpenClosedContext";var i,o=((i=o||{})[i.Open=1]="Open",i[i.Closed=2]="Closed",i[i.Closing=4]="Closing",i[i.Opening=8]="Opening",i);function u(){return Object(r.useContext)(a)}function l(e){var t=e.value,n=e.children;return c.a.createElement(a.Provider,{value:t},n)}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),c=n(135);function a(e,t,n){var a=Object(c.a)(t);Object(r.useEffect)((function(){function t(e){a.current(e)}return window.addEventListener(e,t,n),function(){return window.removeEventListener(e,t,n)}}),[e,n])}},179:function(e,t,n){"use strict";function r(e){for(var t=e.parentElement,n=null;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;var r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;for(var t=e.previousElementSibling;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,"a",(function(){return r}))},180:function(e,t,n){"use strict";var r=n(0);var c=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}));t.a=c},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(26),c=n(0),a=n(158),i=n(135);function o(e,t,n){var r=Object(i.a)(t);Object(c.useEffect)((function(){function t(e){r.current(e)}return document.addEventListener(e,t,n),function(){return document.removeEventListener(e,t,n)}}),[e,n])}var u=n(164);function l(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=Object(c.useRef)(!1);function l(n,c){if(i.current&&!n.defaultPrevented){var o=c(n);if(null!==o&&o.getRootNode().contains(o)){var u,l=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),s=Object(r.a)(l);try{for(s.s();!(u=s.n()).done;){var f=u.value;if(null!==f){var d=f instanceof HTMLElement?f:f.current;if(null!=d&&d.contains(o)||n.composed&&n.composedPath().includes(d))return}}}catch(b){s.e(b)}finally{s.f()}return!Object(a.g)(o,a.c.Loose)&&-1!==o.tabIndex&&n.preventDefault(),t(n,o)}}}Object(c.useEffect)((function(){requestAnimationFrame((function(){i.current=n}))}),[n]);var s=Object(c.useRef)(null);o("mousedown",(function(e){var t,n;i.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),o("click",(function(e){s.current&&(l(e,(function(){return s.current})),s.current=null)}),!0),Object(u.a)("blur",(function(e){return l(e,(function(){return window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null}))}),!0)}},192:function(e,t,n){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,n){return e.id===t[n].id&&e.title===t[n].title}))}},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r=n(134),c=n(132),a=n(142),i=n(26),o=n(8),u=n(130),l=n(0),s=n.n(l),f=n(146),d=n(162),b=n(137),v=n(147),j=n(133),O=n(135),m=n(151),p=n(155);var h=n(140);function g(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),c=1;c<n;c++)r[c-1]=arguments[c];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function x(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),c=1;c<n;c++)r[c-1]=arguments[c];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function y(e,t,n,c){var a=n?"enter":"leave",i=Object(h.a)(),u=void 0!==c?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(c):function(){};"enter"===a&&(e.removeAttribute("hidden"),e.style.display="");var l=Object(b.a)(a,{enter:function(){return t.enter},leave:function(){return t.leave}}),s=Object(b.a)(a,{enter:function(){return t.enterTo},leave:function(){return t.leaveTo}}),f=Object(b.a)(a,{enter:function(){return t.enterFrom},leave:function(){return t.leaveFrom}});return x.apply(void 0,[e].concat(Object(r.a)(t.enter),Object(r.a)(t.enterTo),Object(r.a)(t.enterFrom),Object(r.a)(t.leave),Object(r.a)(t.leaveFrom),Object(r.a)(t.leaveTo),Object(r.a)(t.entered))),g.apply(void 0,[e].concat(Object(r.a)(l),Object(r.a)(f))),i.nextFrame((function(){x.apply(void 0,[e].concat(Object(r.a)(f))),g.apply(void 0,[e].concat(Object(r.a)(s))),function(e,t){var n=Object(h.a)();if(!e)return n.dispose;var r=getComputedStyle(e),c=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e})),n=Object(o.a)(t,1)[0];return void 0===n?0:n})),a=Object(o.a)(c,2),i=a[0]+a[1];if(0!==i){n.group((function(n){n.setTimeout((function(){t(),n.dispose()}),i),n.addEventListener(e,"transitionrun",(function(e){e.target===e.currentTarget&&n.dispose()}))}));var u=n.addEventListener(e,"transitionend",(function(e){e.target===e.currentTarget&&(t(),u())}))}else t();n.add((function(){return t()})),n.dispose}(e,(function(){return x.apply(void 0,[e].concat(Object(r.a)(l))),g.apply(void 0,[e].concat(Object(r.a)(t.entered))),u()}))})),i.dispose}var w=n(152);var E=n(143),C=n(153);var N=["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"],T=["show","appear","unmount"];function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split(" ").filter((function(e){return e.trim().length>1}))}var F=Object(l.createContext)(null);F.displayName="TransitionContext";var P,k=((P=k||{}).Visible="visible",P.Hidden="hidden",P);var R=Object(l.createContext)(null);function S(e){return"children"in e?S(e.children):e.current.filter((function(e){return null!==e.el.current})).filter((function(e){return"visible"===e.state})).length>0}function B(e,t){var n=Object(O.a)(e),r=Object(l.useRef)([]),c=Object(v.a)(),a=Object(w.a)(),i=Object(E.a)((function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.b.Hidden,o=r.current.findIndex((function(t){return t.el===e}));-1!==o&&(Object(b.a)(i,(t={},Object(u.a)(t,f.b.Unmount,(function(){r.current.splice(o,1)})),Object(u.a)(t,f.b.Hidden,(function(){r.current[o].state="hidden"})),t)),a.microTask((function(){var e;!S(r)&&c.current&&(null==(e=n.current)||e.call(n))})))})),s=Object(E.a)((function(e){var t=r.current.find((function(t){return t.el===e}));return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),function(){return i(e,f.b.Unmount)}})),d=Object(l.useRef)([]),j=Object(l.useRef)(Promise.resolve()),m=Object(l.useRef)({enter:[],leave:[],idle:[]}),p=Object(E.a)((function(e,n,r){d.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((function(t){return Object(o.a)(t,1)[0]!==e}))),null==t||t.chains.current[n].push([e,new Promise((function(e){d.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((function(e){Promise.all(m.current[n].map((function(e){var t=Object(o.a)(e,2);t[0];return t[1]}))).then((function(){return e()}))}))]),"enter"===n?j.current=j.current.then((function(){return null==t?void 0:t.wait.current})).then((function(){return r(n)})):r(n)})),h=Object(E.a)((function(e,t,n){Promise.all(m.current[t].splice(0).map((function(e){var t=Object(o.a)(e,2);t[0];return t[1]}))).then((function(){var e;null==(e=d.current.shift())||e()})).then((function(){return n(t)}))}));return Object(l.useMemo)((function(){return{children:r,register:s,unregister:i,onStart:p,onStop:h,wait:j,chains:m}}),[s,i,r,p,h,m,j])}function M(){}R.displayName="NestingContext";var H=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function A(e){var t,n,r={},c=Object(i.a)(H);try{for(c.s();!(n=c.n()).done;){var a=n.value;r[a]=null!=(t=e[a])?t:M}}catch(o){c.e(o)}finally{c.f()}return r}var D=f.a.RenderStrategy;var I=Object(f.d)((function(e,t){var n=e.show,r=e.appear,i=void 0!==r&&r,u=e.unmount,b=Object(a.a)(e,T),v=Object(l.useRef)(null),O=Object(p.b)(v,t);Object(m.a)();var h=Object(d.c)();if(void 0===n&&null!==h&&(n=(h&d.b.Open)===d.b.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var g=Object(l.useState)(n?"visible":"hidden"),x=Object(o.a)(g,2),y=x[0],w=x[1],C=B((function(){w("hidden")})),N=Object(l.useState)(!0),L=Object(o.a)(N,2),P=L[0],k=L[1],M=Object(l.useRef)([n]);Object(j.a)((function(){!1!==P&&M.current[M.current.length-1]!==n&&(M.current.push(n),k(!1))}),[M,n]);var H=Object(l.useMemo)((function(){return{show:n,appear:i,initial:P}}),[n,i,P]);Object(l.useEffect)((function(){if(n)w("visible");else if(S(C)){var e=v.current;if(!e)return;var t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&w("hidden")}else w("hidden")}),[n,C]);var A={unmount:u},I=Object(E.a)((function(){var t;P&&k(!1),null==(t=e.beforeEnter)||t.call(e)})),V=Object(E.a)((function(){var t;P&&k(!1),null==(t=e.beforeLeave)||t.call(e)}));return s.a.createElement(R.Provider,{value:C},s.a.createElement(F.Provider,{value:H},Object(f.e)({ourProps:Object(c.a)(Object(c.a)({},A),{},{as:l.Fragment,children:s.a.createElement(U,Object(c.a)(Object(c.a)(Object(c.a)({ref:O},A),b),{},{beforeEnter:I,beforeLeave:V}))}),theirProps:{},defaultTag:l.Fragment,features:D,visible:"visible"===y,name:"Transition"})))})),U=Object(f.d)((function(e,t){var n,i=e.beforeEnter,g=e.afterEnter,x=e.beforeLeave,T=e.afterLeave,P=e.enter,k=e.enterFrom,M=e.enterTo,H=e.entered,I=e.leave,U=e.leaveFrom,V=e.leaveTo,z=Object(a.a)(e,N),J=Object(l.useRef)(null),q=Object(p.b)(J,t),G=z.unmount?f.b.Unmount:f.b.Hidden,K=function(){var e=Object(l.useContext)(F);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),Q=K.show,W=K.appear,X=K.initial,Y=Object(l.useState)(Q?"visible":"hidden"),Z=Object(o.a)(Y,2),$=Z[0],_=Z[1],ee=function(){var e=Object(l.useContext)(R);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),te=ee.register,ne=ee.unregister,re=Object(l.useRef)(null);Object(l.useEffect)((function(){return te(J)}),[te,J]),Object(l.useEffect)((function(){var e;if(G===f.b.Hidden&&J.current)return Q&&"visible"!==$?void _("visible"):Object(b.a)($,(e={},Object(u.a)(e,"hidden",(function(){return ne(J)})),Object(u.a)(e,"visible",(function(){return te(J)})),e))}),[$,J,te,ne,Q,G]);var ce=Object(O.a)({enter:L(P),enterFrom:L(k),enterTo:L(M),entered:L(H),leave:L(I),leaveFrom:L(U),leaveTo:L(V)}),ae=function(e){var t=Object(l.useRef)(A(e));return Object(l.useEffect)((function(){t.current=A(e)}),[e]),t}({beforeEnter:i,afterEnter:g,beforeLeave:x,afterLeave:T}),ie=Object(m.a)();Object(l.useEffect)((function(){if(ie&&"visible"===$&&null===J.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[J,$,ie]);var oe=X&&!W,ue=!ie||oe||re.current===Q?"idle":Q?"enter":"leave",le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(l.useState)(e),n=Object(o.a)(t,2),r=n[0],c=n[1],a=Object(v.a)(),i=Object(l.useCallback)((function(e){a.current&&c((function(t){return t|e}))}),[r,a]),u=Object(l.useCallback)((function(e){return Boolean(r&e)}),[r]),s=Object(l.useCallback)((function(e){a.current&&c((function(t){return t&~e}))}),[c,a]),f=Object(l.useCallback)((function(e){a.current&&c((function(t){return t^e}))}),[c]);return{flags:r,addFlag:i,hasFlag:u,removeFlag:s,toggleFlag:f}}(0),se=Object(E.a)((function(e){return Object(b.a)(e,{enter:function(){le.addFlag(d.b.Opening),ae.current.beforeEnter()},leave:function(){le.addFlag(d.b.Closing),ae.current.beforeLeave()},idle:function(){}})})),fe=Object(E.a)((function(e){return Object(b.a)(e,{enter:function(){le.removeFlag(d.b.Opening),ae.current.afterEnter()},leave:function(){le.removeFlag(d.b.Closing),ae.current.afterLeave()},idle:function(){}})})),de=B((function(){_("hidden"),ne(J)}),ee);(function(e){var t=e.container,n=e.direction,r=e.classes,c=e.onStart,a=e.onStop,i=Object(v.a)(),o=Object(w.a)(),u=Object(O.a)(n);Object(j.a)((function(){var e=Object(h.a)();o.add(e.dispose);var n=t.current;if(n&&"idle"!==u.current&&i.current)return e.dispose(),c.current(u.current),e.add(y(n,r.current,"enter"===u.current,(function(){e.dispose(),a.current(u.current)}))),e.dispose}),[n])})({container:J,classes:ce,direction:ue,onStart:Object(O.a)((function(e){de.onStart(J,e,se)})),onStop:Object(O.a)((function(e){de.onStop(J,e,fe),"leave"===e&&!S(de)&&(_("hidden"),ne(J))}))}),Object(l.useEffect)((function(){oe&&(G===f.b.Hidden?re.current=null:re.current=Q)}),[Q,oe,$]);var be=z,ve={ref:q};return W&&Q&&X&&(be=Object(c.a)(Object(c.a)({},be),{},{className:C.a.apply(void 0,[z.className].concat(Object(r.a)(ce.current.enter),Object(r.a)(ce.current.enterFrom)))})),s.a.createElement(R.Provider,{value:de},s.a.createElement(d.a,{value:Object(b.a)($,(n={},Object(u.a)(n,"visible",d.b.Open),Object(u.a)(n,"hidden",d.b.Closed),n))|le.flags},Object(f.e)({ourProps:ve,theirProps:be,defaultTag:"div",features:D,visible:"visible"===$,name:"Transition.Child"})))})),V=Object(f.d)((function(e,t){var n=null!==Object(l.useContext)(F),r=null!==Object(d.c)();return s.a.createElement(s.a.Fragment,null,!n&&r?s.a.createElement(I,Object(c.a)({ref:t},e)):s.a.createElement(U,Object(c.a)({ref:t},e)))})),z=Object.assign(I,{Child:V,Root:I})},383:function(e,t,n){"use strict";n.r(t);var r,c=n(134),a=n(0),i=n.n(a),o=n(209),u=n(384),l=n(180),s=n(129),f=n(192),d=n(2);function b(e){var t=e.preferencesModalIsOpen,n=e.setPreferencesModalIsOpen,i=e.providerList,f=e.setP2PData,b=e.setCoinList,v=e.viewType,j=e.setViewType,O=e.blockedProviders,m=e.setBlockedProviders,p=e.selectedCurrency,h=e.setSelectedCurrency,g=e.availableCurrencies,x=Object(s.a)().t;function y(e){b([]),f({}),j(e.target.value)}function w(e){e=e.target.value;var t=O.indexOf(e);-1!==t?t>-1&&m(O.filter((function(t){return t!==e}))):m((function(t){return[].concat(Object(c.a)(t),[e])}))}return Object(d.jsx)(o.a,{appear:!0,show:t,as:a.Fragment,children:Object(d.jsx)(u.a,{as:"div",className:"fixed inset-0 z-50 overflow-y-auto",onClose:function(){return n(!1)},children:Object(d.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(d.jsx)(u.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(d.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(d.jsx)(o.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(d.jsxs)("div",{className:"inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsx)(u.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:x("Preferencias")}),Object(d.jsx)(l.a,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return n(!1)}})]}),Object(d.jsxs)("div",{className:"mt-2 flex flex-col gap-3 text-white",children:[g.length>0&&Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-32 pr-5",children:x("Moneda")}),Object(d.jsx)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:g.map((function(e,t){return Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(d.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e,checked:p&&p===e,onChange:function(){return h(e)}}),Object(d.jsx)("span",{className:"ml-1",children:x(e)})]},t)}))})]}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-32 pr-5",children:x("Vista")}),Object(d.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(d.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:r.ByCoin,checked:v===r.ByCoin,onChange:y}),Object(d.jsx)("span",{className:"ml-1",children:x("Unificada")})]}),Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(d.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:r.ByProvider,checked:v===r.ByProvider,onChange:y}),Object(d.jsx)("span",{className:"ml-1",children:x("Por plataforma")})]})]})]}),i.length>0&&Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-32",children:x("Plataformas")}),Object(d.jsx)("div",{className:"flex flex-row flex-wrap w-full",children:i.map((function(e,t){return Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(d.jsx)("input",{type:"checkbox",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id,onChange:w,checked:-1===O.indexOf(e.id)}),Object(d.jsx)("span",{className:"ml-1",children:e.name})]},t)}))})]})]}),Object(d.jsx)("div",{className:"mt-4 text-right",children:Object(d.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){return n(!1)},children:x("Guardar")})})]})})]})})})}!function(e){e.ByProvider="ByProvider",e.ByCoin="ByCoin"}(r||(r={}));var v=function(e,t){return Object(f.a)(e.blockedProviders,t.blockedProviders)&&e.viewType===t.viewType&&e.selectedCurrency===t.selectedCurrency};t.default=i.a.memo(b,v)}}]);