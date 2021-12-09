(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[15],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return V}));var r,o=n(2),a=n(0),c=n.n(a),i=n(13),l=n(4),u=n(39),s=n(6),d=n(51),f=n(34),b=n(28),p=n(46),v=n(38),m=n(52);function j(e,t,n){void 0===t&&(t=r.All);var c=void 0===n?{}:n,i=c.initialFocus,l=c.containers,u=Object(a.useRef)("undefined"!==typeof window?document.activeElement:null),d=Object(a.useRef)(null),f=Object(m.a)(),b=Boolean(t&r.RestoreFocus),j=Boolean(t&r.InitialFocus);Object(a.useEffect)((function(){b&&(u.current=document.activeElement)}),[b]),Object(a.useEffect)((function(){if(b)return function(){Object(v.d)(u.current),u.current=null}}),[b]),Object(a.useEffect)((function(){if(j&&e.current){var t=document.activeElement;if(null==i?void 0:i.current){if((null==i?void 0:i.current)===t)return void(d.current=t)}else if(e.current.contains(t))return void(d.current=t);(null==i?void 0:i.current)?Object(v.d)(i.current):Object(v.e)(e.current,v.a.First)===v.b.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),d.current=document.activeElement}}),[e,i,j]),Object(p.a)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===s.a.Tab&&(n.preventDefault(),Object(v.e)(e.current,(n.shiftKey?v.a.Previous:v.a.Next)|v.a.WrapAround)===v.b.Success&&(d.current=document.activeElement))})),Object(p.a)("focus",(function(n){if(t&r.FocusLock){var a=new Set(null==l?void 0:l.current);if(a.add(e),a.size){var c=d.current;if(c&&f.current){var i=n.target;i&&i instanceof HTMLElement?!function(e,t){for(var n,r=Object(o.a)(e);!(n=r()).done;){var a;if(null==(a=n.value.current)?void 0:a.contains(t))return!0}return!1}(a,i)?(n.preventDefault(),n.stopPropagation(),Object(v.d)(c)):(d.current=i,Object(v.d)(i)):Object(v.d)(d.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var O=n(7),h=new Set,g=new Map;function x(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function y(e){var t=g.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var w=Object(a.createContext)(!1);function C(e){return c.a.createElement(w.Provider,{value:e.force},e.children)}var E=n(50);function k(){var e=Object(a.useContext)(w),t=Object(a.useContext)(S),n=Object(a.useState)((function(){if(!e&&null!==t)return null;if("undefined"===typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],o=n[1];return Object(a.useEffect)((function(){e||null!==t&&o(t.current)}),[t,o,e]),r}var N=a.Fragment;function T(e){var t=e,n=k(),r=Object(a.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],o=Object(f.a)();return Object(O.a)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),o&&n&&r?Object(E.createPortal)(Object(l.d)({props:t,defaultTag:N,name:"Portal"}),r):null}var P=a.Fragment,S=Object(a.createContext)(null);T.Group=function(e){var t=e.target,n=Object(o.c)(e,["target"]);return c.a.createElement(S.Provider,{value:t},Object(l.d)({props:n,defaultTag:P,name:"Popover.Group"}))};var R=Object(a.createContext)(null);function D(){var e=Object(a.useContext)(R);if(null===e){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,D),t}return e}var F,A,I,M,B=n(10),L=Object(a.createContext)((function(){}));function Y(e){var t=e.children,n=e.onUpdate,r=e.type,o=e.element,i=Object(a.useContext)(L),l=Object(a.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),i.apply(void 0,t)}),[i,n]);return Object(O.a)((function(){return l(F.Add,r,o),function(){return l(F.Remove,r,o)}}),[l,r,o]),c.a.createElement(L.Provider,{value:l},t)}L.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(F||(F={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(I||(I={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(M||(M={}));var z=((A={})[M.SetTitleId]=function(e,t){return e.titleId===t.id?e:Object(o.b)({},e,{titleId:t.id})},A),G=Object(a.createContext)(null);function H(e){var t=Object(a.useContext)(G);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+V.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,H),n}return t}function U(e,t){return Object(i.a)(t.type,z,e,t)}G.displayName="DialogContext";var W=l.a.RenderStrategy|l.a.Static,q=Object(l.c)((function(e,t){var n,d=e.open,v=e.onClose,m=e.initialFocus,w=Object(o.c)(e,["open","onClose","initialFocus"]),E=Object(a.useState)(0),k=E[0],N=E[1],P=Object(B.c)();void 0===d&&null!==P&&(d=Object(i.a)(P,((n={})[B.b.Open]=!0,n[B.b.Closed]=!1,n)));var S=Object(a.useRef)(new Set),D=Object(a.useRef)(null),A=Object(u.a)(D,t),L=e.hasOwnProperty("open")||null!==P,z=e.hasOwnProperty("onClose");if(!L&&!z)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!L)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!z)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof d)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+d);if("function"!==typeof v)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+v);var H=d?I.Open:I.Closed,q=null!==P?P===B.b.Open:H===I.Open,J=Object(a.useReducer)(U,{titleId:null,descriptionId:null}),V=J[0],K=J[1],Q=Object(a.useCallback)((function(){return v(!1)}),[v]),X=Object(a.useCallback)((function(e){return K({type:M.SetTitleId,id:e})}),[K]),Z=Object(f.a)()&&H===I.Open,$=k>1,_=null!==Object(a.useContext)(G),ee=$?"parent":"leaf";j(D,Z?Object(i.a)(ee,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:m,containers:S}),function(e,t){void 0===t&&(t=!0),Object(O.a)((function(){if(t&&e.current){var n=e.current;h.add(n);for(var r,a=Object(o.a)(g.keys());!(r=a()).done;){var c=r.value;c.contains(n)&&(y(c),g.delete(c))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=Object(o.a)(h);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===h.size&&(g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e))}})),function(){if(h.delete(n),h.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!g.has(e)){for(var t,n=Object(o.a)(h);!(t=n()).done;){var r=t.value;if(e.contains(r))return}g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e)}}));else for(var e,t=Object(o.a)(g.keys());!(e=t()).done;){var r=e.value;y(r),g.delete(r)}}}}),[t])}(D,!!$&&Z),Object(p.a)("mousedown",(function(e){var t,n=e.target;H===I.Open&&($||(null==(t=D.current)?void 0:t.contains(n))||Q())})),Object(p.a)("keydown",(function(e){e.key===s.a.Escape&&H===I.Open&&($||(e.preventDefault(),e.stopPropagation(),Q()))})),Object(a.useEffect)((function(){if(H===I.Open&&!_){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[H,_]),Object(a.useEffect)((function(){if(H===I.Open&&D.current){var e=new IntersectionObserver((function(e){for(var t,n=Object(o.a)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&Q()}}));return e.observe(D.current),function(){return e.disconnect()}}}),[H,D,Q]);var te=function(){var e=Object(a.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,Object(a.useMemo)((function(){return function(e){var t=Object(a.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=Object(a.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return c.a.createElement(R.Provider,{value:r},e.children)}}),[n])]}(),ne=te[0],re=te[1],oe="headlessui-dialog-"+Object(b.a)(),ae=Object(a.useMemo)((function(){return[{dialogState:H,close:Q,setTitleId:X},V]}),[H,V,Q,X]),ce=Object(a.useMemo)((function(){return{open:H===I.Open}}),[H]),ie={ref:A,id:oe,role:"dialog","aria-modal":H===I.Open||void 0,"aria-labelledby":V.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},le=w;return c.a.createElement(Y,{type:"Dialog",element:D,onUpdate:Object(a.useCallback)((function(e,t,n){var r;"Dialog"===t&&Object(i.a)(e,((r={})[F.Add]=function(){S.current.add(n),N((function(e){return e+1}))},r[F.Remove]=function(){S.current.add(n),N((function(e){return e-1}))},r))}),[])},c.a.createElement(C,{force:!0},c.a.createElement(T,null,c.a.createElement(G.Provider,{value:ae},c.a.createElement(T.Group,{target:D},c.a.createElement(C,{force:!1},c.a.createElement(re,{slot:ce,name:"Dialog.Description"},Object(l.d)({props:Object(o.b)({},le,ie),slot:ce,defaultTag:"div",features:W,visible:q,name:"Dialog"}))))))))})),J=Object(l.c)((function e(t,n){var r=H([V.displayName,e.name].join("."))[0],c=r.dialogState,i=r.close,s=Object(u.a)(n),f="headlessui-dialog-overlay-"+Object(b.a)(),p=Object(a.useCallback)((function(e){if(e.target===e.currentTarget){if(Object(d.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}}),[i]),v=Object(a.useMemo)((function(){return{open:c===I.Open}}),[c]),m={ref:s,id:f,"aria-hidden":!0,onClick:p},j=t;return Object(l.d)({props:Object(o.b)({},j,m),slot:v,defaultTag:"div",name:"Dialog.Overlay"})}));var V=Object.assign(q,{Overlay:J,Title:function e(t){var n=H([V.displayName,e.name].join("."))[0],r=n.dialogState,c=n.setTitleId,i="headlessui-dialog-title-"+Object(b.a)();Object(a.useEffect)((function(){return c(i),function(){return c(null)}}),[i,c]);var u=Object(a.useMemo)((function(){return{open:r===I.Open}}),[r]),s={id:i},d=t;return Object(l.d)({props:Object(o.b)({},d,s),slot:u,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var t=D(),n="headlessui-description-"+Object(b.a)();Object(O.a)((function(){return t.register(n)}),[n,t.register]);var r=e,a=Object(o.b)({},t.props,{id:n});return Object(l.d)({props:Object(o.b)({},r,a),slot:t.slot||{},defaultTag:"p",name:t.name||"Description"})}})},186:function(e,t,n){"use strict";n.r(t),n.d(t,"PreferencesModal",(function(){return f}));var r,o=n(47),a=n(0),c=n.n(a),i=n(96),l=n(128),u=n(9),s=n(97),d=n(1);function f(e){var t=e.preferencesModalIsOpen,n=e.setPreferencesModalIsOpen,c=e.providerList,f=e.setP2PData,b=e.viewType,p=e.setViewType,v=e.blockedProviders,m=e.setBlockedProviders,j=e.selectedCurrency,O=e.setSelectedCurrency,h=e.availableCurrencies,g=Object(s.a)().t;function x(e){f({}),p(e.target.value)}function y(e){e=e.target.value;var t=v.indexOf(e);-1!==t?t>-1&&m(v.filter((function(t){return t!==e}))):m((function(t){return[].concat(Object(o.a)(t),[e])}))}return Object(d.jsx)(i.a,{appear:!0,show:t,as:a.Fragment,children:Object(d.jsx)(l.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return n(!1)},children:Object(d.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(d.jsx)(l.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(d.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(d.jsx)(i.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(d.jsxs)("div",{className:"inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(d.jsxs)("div",{className:"flex justify-between",children:[Object(d.jsx)(l.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:g("Preferencias")}),Object(d.jsx)(u.x,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){return n(!1)}})]}),Object(d.jsxs)("div",{className:"mt-2 flex flex-col gap-3 text-white",children:[h.length>0&&Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-32 pr-5",children:g("Moneda")}),Object(d.jsx)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:h.map((function(e,t){return Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(d.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e,checked:j&&j===e,onChange:function(){return O(e)}}),Object(d.jsx)("span",{className:"ml-1",children:g(e)})]},t)}))})]}),Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-32 pr-5",children:g("Vista")}),Object(d.jsxs)("div",{className:"flex flex-col sm:flex-row w-full gap-2",children:[Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(d.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:r.ByCoin,checked:b===r.ByCoin,onChange:x}),Object(d.jsx)("span",{className:"ml-1",children:g("Unificada")})]}),Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(d.jsx)("input",{type:"radio",className:"form-radio cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:r.ByProvider,checked:b===r.ByProvider,onChange:x}),Object(d.jsx)("span",{className:"ml-1",children:g("Por plataforma")})]})]})]}),c.length>0&&Object(d.jsxs)("div",{className:"flex flex-row",children:[Object(d.jsx)("p",{className:"w-32",children:g("Plataformas")}),Object(d.jsx)("div",{className:"flex flex-row flex-wrap w-full",children:c.map((function(e,t){return Object(d.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1",children:[Object(d.jsx)("input",{type:"checkbox",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e.id,onChange:y,checked:-1===v.indexOf(e.id)}),Object(d.jsx)("span",{className:"ml-1",children:e.name})]},t)}))})]})]}),Object(d.jsx)("div",{className:"mt-4 text-right",children:Object(d.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){return n(!1)},children:g("Guardar")})})]})})]})})})}!function(e){e.ByProvider="ByProvider",e.ByCoin="ByCoin"}(r||(r={}));var b=function(e,t){return n=e.blockedProviders,r=t.blockedProviders,(n===r||n.length===r.length&&n.every((function(e,t){return e.id===r[t].id&&e.title===r[t].title})))&&e.viewType===t.viewType&&e.selectedCurrency===t.selectedCurrency;var n,r};t.default=c.a.memo(f,b)}}]);