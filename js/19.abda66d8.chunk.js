(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[19],{182:function(e,t,n){"use strict";t.a=function(e,t){return e===t||e.length===t.length&&e.every((function(e,n){return e.id===t[n].id&&e.title===t[n].title}))}},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return W}));var r,o=n(3),i=n(0),a=n.n(i),c=n(11),s=n(5),l=n(42),u=n(7),d=n(51),f=n(33),p=n(24),b=n(50),m=n(41),j=n(54);function v(e,t,n){void 0===t&&(t=r.All);var a=void 0===n?{}:n,c=a.initialFocus,s=a.containers,l=Object(i.useRef)("undefined"!==typeof window?document.activeElement:null),d=Object(i.useRef)(null),f=Object(j.a)(),p=Boolean(t&r.RestoreFocus),v=Boolean(t&r.InitialFocus);Object(i.useEffect)((function(){p&&(l.current=document.activeElement)}),[p]),Object(i.useEffect)((function(){if(p)return function(){Object(m.d)(l.current),l.current=null}}),[p]),Object(i.useEffect)((function(){if(v&&e.current){var t=document.activeElement;if(null==c?void 0:c.current){if((null==c?void 0:c.current)===t)return void(d.current=t)}else if(e.current.contains(t))return void(d.current=t);(null==c?void 0:c.current)?Object(m.d)(c.current):Object(m.e)(e.current,m.a.First)===m.b.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),d.current=document.activeElement}}),[e,c,v]),Object(b.a)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===u.a.Tab&&(n.preventDefault(),Object(m.e)(e.current,(n.shiftKey?m.a.Previous:m.a.Next)|m.a.WrapAround)===m.b.Success&&(d.current=document.activeElement))})),Object(b.a)("focus",(function(n){if(t&r.FocusLock){var i=new Set(null==s?void 0:s.current);if(i.add(e),i.size){var a=d.current;if(a&&f.current){var c=n.target;c&&c instanceof HTMLElement?!function(e,t){for(var n,r=Object(o.a)(e);!(n=r()).done;){var i;if(null==(i=n.value.current)?void 0:i.contains(t))return!0}return!1}(i,c)?(n.preventDefault(),n.stopPropagation(),Object(m.d)(a)):(d.current=c,Object(m.d)(c)):Object(m.d)(d.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var O=n(8),g=new Set,h=new Map;function x(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function y(e){var t=h.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var w=Object(i.createContext)(!1);function N(e){return a.a.createElement(w.Provider,{value:e.force},e.children)}var C=n(52);function E(){var e=Object(i.useContext)(w),t=Object(i.useContext)(F),n=Object(i.useState)((function(){if(!e&&null!==t)return null;if("undefined"===typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],o=n[1];return Object(i.useEffect)((function(){null!==r&&(document.body.contains(r)||document.body.appendChild(r))}),[r]),Object(i.useEffect)((function(){e||null!==t&&o(t.current)}),[t,o,e]),r}var k=i.Fragment;function S(e){var t=e,n=E(),r=Object(i.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],o=Object(f.a)();return Object(O.a)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),o&&n&&r?Object(C.createPortal)(Object(s.d)({props:t,defaultTag:k,name:"Portal"}),r):null}var T=i.Fragment,F=Object(i.createContext)(null);S.Group=function(e){var t=e.target,n=Object(o.c)(e,["target"]);return a.a.createElement(F.Provider,{value:t},Object(s.d)({props:n,defaultTag:T,name:"Popover.Group"}))};var R=Object(i.createContext)(null);function A(){var e=Object(i.useContext)(R);if(null===e){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return e}var D,I,P,U,_=n(9),M=Object(i.createContext)((function(){}));function Y(e){var t=e.children,n=e.onUpdate,r=e.type,o=e.element,c=Object(i.useContext)(M),s=Object(i.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),c.apply(void 0,t)}),[c,n]);return Object(O.a)((function(){return s(D.Add,r,o),function(){return s(D.Remove,r,o)}}),[s,r,o]),a.a.createElement(M.Provider,{value:s},t)}M.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(D||(D={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(P||(P={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(U||(U={}));var q=((I={})[U.SetTitleId]=function(e,t){return e.titleId===t.id?e:Object(o.b)({},e,{titleId:t.id})},I),L=Object(i.createContext)(null);function J(e){var t=Object(i.useContext)(L);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+W.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,J),n}return t}function z(e,t){return Object(c.a)(t.type,q,e,t)}L.displayName="DialogContext";var G=s.a.RenderStrategy|s.a.Static,H=Object(s.c)((function(e,t){var n,d=e.open,m=e.onClose,j=e.initialFocus,w=Object(o.c)(e,["open","onClose","initialFocus"]),C=Object(i.useState)(0),E=C[0],k=C[1],T=Object(_.c)();void 0===d&&null!==T&&(d=Object(c.a)(T,((n={})[_.b.Open]=!0,n[_.b.Closed]=!1,n)));var F=Object(i.useRef)(new Set),A=Object(i.useRef)(null),I=Object(l.a)(A,t),M=e.hasOwnProperty("open")||null!==T,q=e.hasOwnProperty("onClose");if(!M&&!q)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!M)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!q)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof d)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+d);if("function"!==typeof m)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+m);var J=d?P.Open:P.Closed,H=null!==T?T===_.b.Open:J===P.Open,B=Object(i.useReducer)(z,{titleId:null,descriptionId:null}),W=B[0],K=B[1],Q=Object(i.useCallback)((function(){return m(!1)}),[m]),V=Object(i.useCallback)((function(e){return K({type:U.SetTitleId,id:e})}),[K]),X=Object(f.a)()&&J===P.Open,Z=E>1,$=null!==Object(i.useContext)(L),ee=Z?"parent":"leaf";v(A,X?Object(c.a)(ee,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:j,containers:F}),function(e,t){void 0===t&&(t=!0),Object(O.a)((function(){if(t&&e.current){var n=e.current;g.add(n);for(var r,i=Object(o.a)(h.keys());!(r=i()).done;){var a=r.value;a.contains(n)&&(y(a),h.delete(a))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=Object(o.a)(g);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===g.size&&(h.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e))}})),function(){if(g.delete(n),g.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!h.has(e)){for(var t,n=Object(o.a)(g);!(t=n()).done;){var r=t.value;if(e.contains(r))return}h.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),x(e)}}));else for(var e,t=Object(o.a)(h.keys());!(e=t()).done;){var r=e.value;y(r),h.delete(r)}}}}),[t])}(A,!!Z&&X),Object(b.a)("mousedown",(function(e){var t,n=e.target;J===P.Open&&(Z||(null==(t=A.current)?void 0:t.contains(n))||Q())})),Object(b.a)("keydown",(function(e){e.key===u.a.Escape&&J===P.Open&&(Z||(e.preventDefault(),e.stopPropagation(),Q()))})),Object(i.useEffect)((function(){if(J===P.Open&&!$){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[J,$]),Object(i.useEffect)((function(){if(J===P.Open&&A.current){var e=new IntersectionObserver((function(e){for(var t,n=Object(o.a)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&Q()}}));return e.observe(A.current),function(){return e.disconnect()}}}),[J,A,Q]);var te=function(){var e=Object(i.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,Object(i.useMemo)((function(){return function(e){var t=Object(i.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=Object(i.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return a.a.createElement(R.Provider,{value:r},e.children)}}),[n])]}(),ne=te[0],re=te[1],oe="headlessui-dialog-"+Object(p.a)(),ie=Object(i.useMemo)((function(){return[{dialogState:J,close:Q,setTitleId:V},W]}),[J,W,Q,V]),ae=Object(i.useMemo)((function(){return{open:J===P.Open}}),[J]),ce={ref:I,id:oe,role:"dialog","aria-modal":J===P.Open||void 0,"aria-labelledby":W.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},se=w;return a.a.createElement(Y,{type:"Dialog",element:A,onUpdate:Object(i.useCallback)((function(e,t,n){var r;"Dialog"===t&&Object(c.a)(e,((r={})[D.Add]=function(){F.current.add(n),k((function(e){return e+1}))},r[D.Remove]=function(){F.current.add(n),k((function(e){return e-1}))},r))}),[])},a.a.createElement(N,{force:!0},a.a.createElement(S,null,a.a.createElement(L.Provider,{value:ie},a.a.createElement(S.Group,{target:A},a.a.createElement(N,{force:!1},a.a.createElement(re,{slot:ae,name:"Dialog.Description"},Object(s.d)({props:Object(o.b)({},se,ce),slot:ae,defaultTag:"div",features:G,visible:H,name:"Dialog"}))))))))})),B=Object(s.c)((function e(t,n){var r=J([W.displayName,e.name].join("."))[0],a=r.dialogState,c=r.close,u=Object(l.a)(n),f="headlessui-dialog-overlay-"+Object(p.a)(),b=Object(i.useCallback)((function(e){if(e.target===e.currentTarget){if(Object(d.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),c()}}),[c]),m=Object(i.useMemo)((function(){return{open:a===P.Open}}),[a]),j={ref:u,id:f,"aria-hidden":!0,onClick:b},v=t;return Object(s.d)({props:Object(o.b)({},v,j),slot:m,defaultTag:"div",name:"Dialog.Overlay"})}));var W=Object.assign(H,{Overlay:B,Title:function e(t){var n=J([W.displayName,e.name].join("."))[0],r=n.dialogState,a=n.setTitleId,c="headlessui-dialog-title-"+Object(p.a)();Object(i.useEffect)((function(){return a(c),function(){return a(null)}}),[c,a]);var l=Object(i.useMemo)((function(){return{open:r===P.Open}}),[r]),u={id:c},d=t;return Object(s.d)({props:Object(o.b)({},d,u),slot:l,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var t=A(),n="headlessui-description-"+Object(p.a)();Object(O.a)((function(){return t.register(n)}),[n,t.register]);var r=e,i=Object(o.b)({},t.props,{id:n});return Object(s.d)({props:Object(o.b)({},r,i),slot:t.slot||{},defaultTag:"p",name:t.name||"Description"})}})},725:function(e,t,n){"use strict";n.r(t);var r=n(49),o=n(4),i=n(0),a=n.n(i),c=n(128),s=n(230),l=n(6),u=n(21),d=n(275),f=n.n(d),p=n(129),b=n(182),m=n(1),j=["BTC","ETH","DAI","USDC","USDT"],v=[1,2,3,4,5];function O(e){var t=e.notificationSettingsModalIsOpen,n=e.setNotificationSettingsModalIsOpen,a=e.setAskForNotificationsAccess,d=e.askForNotificationsAccess,b=e.tempSelectedCryptosForNotifications,O=e.setTempSelectedCryptosForNotifications,g=e.tempSelectedPercentageForNotifications,h=e.setTempSelectedPercentageForNotifications,x=e.setSelectedCryptosForNotifications,y=e.setSelectedPercentageForNotifications,w=e.setNotificationsEnabled,N=Object(p.a)().t,C=Object(i.useState)(!1),E=Object(o.a)(C,2),k=E[0],S=E[1];function T(e){b.includes(e.target.value)?O(b.filter((function(t){return t!==e.target.value}))):O((function(t){return[].concat(Object(r.a)(t),[e.target.value])}))}function F(e){e&&"Notification"in window?"granted"===Notification.permission?(n(!1),a(!1),w(!0),f.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_enabled"),JSON.stringify(!0))):"denied"!==Notification.permission?(a(!0),Notification.requestPermission().then((function(e){"granted"===e&&(n(!1),a(!1),new Notification(N("\xa1Te damos la bienvenida!"),{body:N("\xa1Hola! As\xed se ver\xe1n las notificationes \ud83d\ude09"),icon:"https://www.cryptosaurio.com/static/img/logo-web.webp"})),w("granted"===e),f.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_enabled"),JSON.stringify("granted"===e))}))):"denied"===Notification.permission?a(!0):(w(!1),f.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_enabled"),JSON.stringify(!1)),n(!1)):(w(!1),f.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_enabled"),JSON.stringify(!1)),n(!1)),x(b),f.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_selected_cryptos"),JSON.stringify(b)),y(g),f.a.setItem("".concat(window.COUNTRY.toUpperCase(),"_notifications_selected_percentage"),JSON.stringify(g))}return Object(i.useEffect)((function(){b.length>0&&b.length!==j.length?S(!0):(b.length===j.length||0===b.length)&&S(!1)}),[b]),Object(m.jsx)(c.a,{appear:!0,show:t,as:i.Fragment,children:Object(m.jsx)(s.a,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){n(!1),a(!1)},children:Object(m.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[Object(m.jsx)(s.a.Overlay,{className:"fixed inset-0 backdrop-filter backdrop-blur-sm"}),Object(m.jsx)("span",{className:"hidden md:inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),Object(m.jsx)(c.a.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(m.jsxs)("div",{className:"inline-block w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl",children:[Object(m.jsxs)("div",{className:"flex justify-between",children:[Object(m.jsx)(s.a.Title,{as:"h3",className:"text-lg font-medium leading-6 text-white inline-block",children:N("Crear alerta personalizada")}),Object(m.jsx)(l.F,{className:"w-5 h-5 ml-2 -mr-1 cursor-pointer text-gray-600","aria-hidden":"true",onClick:function(){n(!1),a(!1)}})]}),!d&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"text-white py-2",children:[Object(m.jsx)("p",{children:N("Selecciona los criterios que te interesan y te enviaremos una notificaci\xf3n de escritorio cuando encontremos oportunidades para ti.")}),Object(m.jsx)("p",{children:N("Para que funcione tendr\xe1s que tener la p\xe1gina de Cryptosaurio abierta, aunque sea en otra ventana.")}),Object(m.jsx)("p",{children:N("Tendremos en cuenta los filtros que tienes aplicados.")})]}),Object(m.jsxs)("div",{className:"mt-2 flex flex-col gap-3 text-white",children:[Object(m.jsxs)("div",{className:"flex flex-row",children:[Object(m.jsx)("p",{className:"w-52",children:N("Criptomonedas")}),Object(m.jsxs)("div",{className:"flex flex-row flex-wrap w-full",children:[Object(m.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(m.jsx)("input",{ref:function(e){return e&&(e.indeterminate=k)},checked:b.length===j.length,onChange:function(e){e.target.checked?O(j.map((function(e){return e}))):O([])},type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"}),Object(m.jsx)("span",{className:"ml-1",children:N("Todas")})]}),j.map((function(e,t){return Object(m.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(m.jsx)("input",{checked:b.includes(e),onChange:T,type:"checkbox",className:"text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e}),Object(m.jsx)("span",{className:"ml-1",children:Object(u.a)(e).name})]},t)}))]})]}),Object(m.jsxs)("div",{className:"flex flex-row",children:[Object(m.jsx)("p",{className:"w-52",children:N("Ganancia")}),Object(m.jsx)("div",{className:"flex flex-row flex-wrap w-full",children:v.map((function(e,t){return Object(m.jsxs)("label",{className:"inline-flex items-center cursor-pointer p-1 w-44",children:[Object(m.jsx)("input",{checked:g===e,onChange:function(){return h(e)},type:"radio",className:"form-radio text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700",value:e}),Object(m.jsx)("span",{className:"ml-1",children:N("Desde {{percentage}}%",{percentage:e})})]},t)}))})]})]}),Object(m.jsxs)("div",{className:"mt-4 text-right",children:[Object(m.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 mr-3",onClick:function(){F(!1)},children:N("Desactivar")}),Object(m.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-white border border-transparent hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500",onClick:function(){b.length>0&&g&&g>0&&F(!0)},children:N("Guardar")})]})]})||Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"text-white py-2 grid grid-flow-row justify-items-center text-center",children:[Object(m.jsx)("img",{loading:"lazy",className:"w-56",src:"https://www.cryptosaurio.com/static/img/thanks-alerts.webp"}),Object(m.jsx)("p",{className:"font-bold pt-5",children:N("Ahora solo falta que nos des permiso")}),Object(m.jsx)("p",{className:"pt-1 mx-10",children:N("Necesitaremos que nos des permiso para enviar notificaciones a tu navegador. Esto nos permitir\xe1 avisarte cada vez que encontremos nuevas oportunidades.")})]})})]})})]})})})}var g=function(e,t){return e.askForNotificationsAccess&&t.askForNotificationsAccess&&e.availableCryptosForNotifications===t.availableCryptosForNotifications&&Object(b.a)(e.tempSelectedCryptosForNotifications,t.tempSelectedCryptosForNotifications)&&Object(b.a)(e.tempSelectedPercentageForNotifications,t.tempSelectedPercentageForNotifications)};t.default=a.a.memo(O,g)}}]);