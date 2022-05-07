(this["webpackJsonpfront-in-react"]=this["webpackJsonpfront-in-react"]||[]).push([[19,17,18,20,21,22,26],{139:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o}))},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},142:function(e,t,n){"use strict";function r(e,t){if(e in t){for(var n=t[e],o=arguments.length,i=new Array(o>2?o-2:0),u=2;u<o;u++)i[u-2]=arguments[u];return"function"===typeof n?n.apply(void 0,i):n}var a=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}n.d(t,"a",(function(){return r}))},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return c}));var r,o,i=n(139),u=n(0),a=n(142);function c(e){var t=e.props,n=e.slot,u=e.defaultTag,c=e.features,f=e.visible,s=void 0===f||f,d=e.name;if(s)return l(t,n,u,d);var v=null!=c?c:r.None;if(v&r.Static){var b=t.static,p=void 0!==b&&b,O=Object(i.c)(t,["static"]);if(p)return l(O,n,u,d)}if(v&r.RenderStrategy){var m,j=t.unmount,h=void 0===j||j,g=Object(i.c)(t,["unmount"]),E=h?o.Unmount:o.Hidden;return Object(a.a)(E,((m={})[o.Unmount]=function(){return null},m[o.Hidden]=function(){return l(Object(i.b)({},g,{hidden:!0,style:{display:"none"}}),n,u,d)},m))}return l(t,n,u,d)}function l(e,t,n,r){var o;void 0===t&&(t={});var a=s(e,["unmount","static"]),c=a.as,l=void 0===c?n:c,f=a.children,d=a.refName,v=void 0===d?"ref":d,b=Object(i.c)(a,["as","children","refName"]),p=void 0!==e.ref?((o={})[v]=e.ref,o):{},O="function"===typeof f?f(t):f;if(b.className&&"function"===typeof b.className&&(b.className=b.className(t)),l===u.Fragment&&Object.keys(b).length>0){if(!Object(u.isValidElement)(O)||Array.isArray(O)&&O.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(b).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return Object(u.cloneElement)(O,Object.assign({},function(e,t,n){for(var r,o=Object.assign({},e),u=function(){var n,i=r.value;void 0!==e[i]&&void 0!==t[i]&&Object.assign(o,((n={})[i]=function(n){n.defaultPrevented||e[i](n),n.defaultPrevented||t[i](n)},n))},a=Object(i.a)(n);!(r=a()).done;)u();return o}(function(e){var t=Object.assign({},e);for(var n in t)void 0===t[n]&&delete t[n];return t}(s(b,["ref"])),O.props,["onClick"]),p))}return Object(u.createElement)(l,Object.assign({},s(b,["ref"]),l!==u.Fragment&&p),O)}function f(e){var t;return Object.assign(Object(u.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function s(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),o=Object(i.a)(t);!(n=o()).done;){var u=n.value;u in r&&delete r[u]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={}))},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o={serverHandoffComplete:!1};function i(){var e=Object(r.useState)(o.serverHandoffComplete),t=e[0],n=e[1];return Object(r.useEffect)((function(){!0!==t&&n(!0)}),[t]),Object(r.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),t}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n(140),i=n(145),u=0;function a(){return++u}function c(){var e=Object(i.a)(),t=Object(r.useState)(e?a:null),n=t[0],u=t[1];return Object(o.a)((function(){null===n&&u(a())}),[n]),null!=n?""+n:void 0}},153:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(r||(r={}))},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a}));var r,o=n(0),i=n.n(o),u=Object(o.createContext)(null);function a(){return Object(o.useContext)(u)}function c(e){var t=e.value,n=e.children;return i.a.createElement(u.Provider,{value:t},n)}u.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(e,t,n){var o=Object(r.useRef)(t);o.current=t,Object(r.useEffect)((function(){function t(e){o.current.call(window,e)}return window.addEventListener(e,t,n),function(){return window.removeEventListener(e,t,n)}}),[e,n])}},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);function o(){var e=Object(r.useRef)(!1);return Object(r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return l}));var r,o,i,u,a=n(142),c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return e+":not([tabindex='-1'])"})).join(",");function l(e,t){var n;return void 0===t&&(t=u.Strict),e!==document.body&&Object(a.a)(t,((n={})[u.Strict]=function(){return e.matches(c)},n[u.Loose]=function(){for(var t=e;null!==t;){if(t.matches(c))return!0;t=t.parentElement}return!1},n))}function f(e){null==e||e.focus({preventScroll:!0})}function s(e,t){var n=Array.isArray(e)?e.slice().sort((function(e,t){var n=e.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})):function(e){return void 0===e&&(e=document.body),null==e?[]:Array.from(e.querySelectorAll(c))}(e),u=document.activeElement,a=function(){if(t&(r.First|r.Next))return i.Next;if(t&(r.Previous|r.Last))return i.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),l=function(){if(t&r.First)return 0;if(t&r.Previous)return Math.max(0,n.indexOf(u))-1;if(t&r.Next)return Math.max(0,n.indexOf(u))+1;if(t&r.Last)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),f=t&r.NoScroll?{preventScroll:!0}:{},s=0,d=n.length,v=void 0;do{var b;if(s>=d||s+d<=0)return o.Error;var p=l+s;if(t&r.WrapAround)p=(p+d)%d;else{if(p<0)return o.Underflow;if(p>=d)return o.Overflow}null==(b=v=n[p])||b.focus(f),s+=a}while(v!==document.activeElement);return v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),o.Success}!function(e){e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll"}(r||(r={})),function(e){e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow"}(o||(o={})),function(e){e[e.Previous=-1]="Previous",e[e.Next=1]="Next"}(i||(i={})),function(e){e[e.Strict=0]="Strict",e[e.Loose=1]="Loose"}(u||(u={}))},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(139),o=n(0);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=Object(o.useRef)(t);return Object(o.useEffect)((function(){i.current=t}),[t]),Object(o.useCallback)((function(e){for(var t,n=Object(r.a)(i.current);!(t=n()).done;){var o=t.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[i])}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(139);function o(){var e=[],t={requestAnimationFrame:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=requestAnimationFrame.apply(void 0,arguments);t.add((function(){return cancelAnimationFrame(e)}))})),nextFrame:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.requestAnimationFrame((function(){t.requestAnimationFrame.apply(t,n)}))},setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=setTimeout.apply(void 0,arguments);t.add((function(){return clearTimeout(e)}))})),add:function(t){e.push(t)},dispose:function(){for(var t,n=Object(r.a)(e.splice(0));!(t=n()).done;){var o=t.value;o()}}};return t}},169:function(e,t,n){"use strict";function r(e){for(var t,n,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var i=null!=(t=""===(null==(n=r)?void 0:n.getAttribute("disabled")))&&t;return(!i||!function(e){if(!e)return!1;var t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(o))&&i}n.d(t,"a",(function(){return r}))},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(139),o=n(0),i=n.n(o),u=n(142),a=n(144),c=n(140),l=n(145),f=n(150),s=n(159),d=n(154);var v,b=n(167);function p(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function O(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}function m(e,t,n,r,o,i){var u=Object(b.a)(),a=void 0!==i?function(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}(i):function(){};return O.apply(void 0,[e].concat(o)),p.apply(void 0,[e].concat(t,n)),u.nextFrame((function(){O.apply(void 0,[e].concat(n)),p.apply(void 0,[e].concat(r)),u.add(function(e,t){var n=Object(b.a)();if(!e)return n.dispose;var r=getComputedStyle(e),o=[r.transitionDuration,r.transitionDelay].map((function(e){var t=e.split(",").filter(Boolean).map((function(e){return e.includes("ms")?parseFloat(e):1e3*parseFloat(e)})).sort((function(e,t){return t-e}))[0];return void 0===t?0:t})),i=o[0],u=o[1];return 0!==i?n.setTimeout((function(){t(v.Finished)}),i+u):t(v.Finished),n.add((function(){return t(v.Cancelled)})),n.dispose}(e,(function(n){return O.apply(void 0,[e].concat(r,t)),p.apply(void 0,[e].concat(o)),a(n)})))})),u.add((function(){return O.apply(void 0,[e].concat(t,n,r,o))})),u.add((function(){return a(v.Cancelled)})),u.dispose}function j(e){return void 0===e&&(e=""),Object(o.useMemo)((function(){return e.split(" ").filter((function(e){return e.trim().length>1}))}),[e])}!function(e){e.Finished="finished",e.Cancelled="cancelled"}(v||(v={}));var h,g=Object(o.createContext)(null);g.displayName="TransitionContext",function(e){e.Visible="visible",e.Hidden="hidden"}(h||(h={}));var E=Object(o.createContext)(null);function y(e){return"children"in e?y(e.children):e.current.filter((function(e){return e.state===h.Visible})).length>0}function w(e){var t=Object(o.useRef)(e),n=Object(o.useRef)([]),r=Object(s.a)();Object(o.useEffect)((function(){t.current=e}),[e]);var i=Object(o.useCallback)((function(e,o){var i;void 0===o&&(o=a.b.Hidden);var c=n.current.findIndex((function(t){return t.id===e}));-1!==c&&(Object(u.a)(o,((i={})[a.b.Unmount]=function(){n.current.splice(c,1)},i[a.b.Hidden]=function(){n.current[c].state=h.Hidden},i)),!y(n)&&r.current&&(null==t.current||t.current()))}),[t,r,n]),c=Object(o.useCallback)((function(e){var t=n.current.find((function(t){return t.id===e}));return t?t.state!==h.Visible&&(t.state=h.Visible):n.current.push({id:e,state:h.Visible}),function(){return i(e,a.b.Unmount)}}),[n,i]);return Object(o.useMemo)((function(){return{children:n,register:c,unregister:i}}),[c,i,n])}function C(){}E.displayName="NestingContext";var S=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function T(e){for(var t,n={},o=Object(r.a)(S);!(t=o()).done;){var i,u=t.value;n[u]=null!=(i=e[u])?i:C}return n}var F=a.a.RenderStrategy;function A(e){var t,n=e.beforeEnter,s=e.afterEnter,b=e.beforeLeave,p=e.afterLeave,O=e.enter,C=e.enterFrom,S=e.enterTo,A=e.entered,x=e.leave,N=e.leaveFrom,R=e.leaveTo,L=Object(r.c)(e,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),P=Object(o.useRef)(null),k=Object(o.useState)(h.Visible),D=k[0],H=k[1],I=L.unmount?a.b.Unmount:a.b.Hidden,M=function(){var e=Object(o.useContext)(g);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),U=M.show,V=M.appear,q=M.initial,W=function(){var e=Object(o.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),Y=W.register,B=W.unregister,G=Object(f.a)(),_=Object(o.useRef)(!1),z=w((function(){_.current||(H(h.Hidden),B(G),te.current.afterLeave())}));Object(c.a)((function(){if(G)return Y(G)}),[Y,G]),Object(c.a)((function(){var e;I===a.b.Hidden&&G&&(U&&D!==h.Visible?H(h.Visible):Object(u.a)(D,((e={})[h.Hidden]=function(){return B(G)},e[h.Visible]=function(){return Y(G)},e)))}),[D,G,Y,B,U,I]);var J=j(O),K=j(C),$=j(S),Q=j(A),X=j(x),Z=j(N),ee=j(R),te=function(e){var t=Object(o.useRef)(T(e));return Object(o.useEffect)((function(){t.current=T(e)}),[e]),t}({beforeEnter:n,afterEnter:s,beforeLeave:b,afterLeave:p}),ne=Object(l.a)();Object(o.useEffect)((function(){if(ne&&D===h.Visible&&null===P.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[P,D,ne]);var re=q&&!V;Object(c.a)((function(){var e=P.current;if(e&&!re)return _.current=!0,U&&te.current.beforeEnter(),U||te.current.beforeLeave(),U?m(e,J,K,$,Q,(function(e){_.current=!1,e===v.Finished&&te.current.afterEnter()})):m(e,X,Z,ee,Q,(function(e){_.current=!1,e===v.Finished&&(y(z)||(H(h.Hidden),B(G),te.current.afterLeave()))}))}),[te,G,_,B,z,P,re,U,J,K,$,X,Z,ee]);var oe={ref:P},ie=L;return i.a.createElement(E.Provider,{value:z},i.a.createElement(d.a,{value:Object(u.a)(D,(t={},t[h.Visible]=d.b.Open,t[h.Hidden]=d.b.Closed,t))},Object(a.d)({props:Object(r.b)({},ie,oe),defaultTag:"div",features:F,visible:D===h.Visible,name:"Transition.Child"})))}function x(e){var t,n=e.show,c=e.appear,l=void 0!==c&&c,f=e.unmount,s=Object(r.c)(e,["show","appear","unmount"]),v=Object(d.c)();void 0===n&&null!==v&&(n=Object(u.a)(v,((t={})[d.b.Open]=!0,t[d.b.Closed]=!1,t)));if(![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");var b=Object(o.useState)(n?h.Visible:h.Hidden),p=b[0],O=b[1],m=w((function(){O(h.Hidden)})),j=function(){var e=Object(o.useRef)(!0);return Object(o.useEffect)((function(){e.current=!1}),[]),e.current}(),C=Object(o.useMemo)((function(){return{show:n,appear:l||!j,initial:j}}),[n,l,j]);Object(o.useEffect)((function(){n?O(h.Visible):y(m)||O(h.Hidden)}),[n,m]);var S={unmount:f};return i.a.createElement(E.Provider,{value:m},i.a.createElement(g.Provider,{value:C},Object(a.d)({props:Object(r.b)({},S,{as:o.Fragment,children:i.a.createElement(A,Object.assign({},S,s))}),defaultTag:o.Fragment,features:F,visible:p===h.Visible,name:"Transition"})))}x.Child=function(e){var t=null!==Object(o.useContext)(g),n=null!==Object(d.c)();return!t&&n?i.a.createElement(x,Object.assign({},e)):i.a.createElement(A,Object.assign({},e))},x.Root=x},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return z}));var r,o=n(139),i=n(0),u=n.n(i),a=n(142),c=n(144),l=n(166),f=n(153),s=n(169),d=n(145),v=n(150),b=n(158),p=n(165),O=n(159);function m(e,t,n){void 0===t&&(t=r.All);var u=void 0===n?{}:n,a=u.initialFocus,c=u.containers,l=Object(i.useRef)("undefined"!==typeof window?document.activeElement:null),s=Object(i.useRef)(null),d=Object(O.a)(),v=Boolean(t&r.RestoreFocus),m=Boolean(t&r.InitialFocus);Object(i.useEffect)((function(){v&&(l.current=document.activeElement)}),[v]),Object(i.useEffect)((function(){if(v)return function(){Object(p.d)(l.current),l.current=null}}),[v]),Object(i.useEffect)((function(){if(m&&e.current){var t=document.activeElement;if(null==a?void 0:a.current){if((null==a?void 0:a.current)===t)return void(s.current=t)}else if(e.current.contains(t))return void(s.current=t);(null==a?void 0:a.current)?Object(p.d)(a.current):Object(p.e)(e.current,p.a.First)===p.b.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.current=document.activeElement}}),[e,a,m]),Object(b.a)("keydown",(function(n){t&r.TabLock&&e.current&&n.key===f.a.Tab&&(n.preventDefault(),Object(p.e)(e.current,(n.shiftKey?p.a.Previous:p.a.Next)|p.a.WrapAround)===p.b.Success&&(s.current=document.activeElement))})),Object(b.a)("focus",(function(n){if(t&r.FocusLock){var i=new Set(null==c?void 0:c.current);if(i.add(e),i.size){var u=s.current;if(u&&d.current){var a=n.target;a&&a instanceof HTMLElement?!function(e,t){for(var n,r=Object(o.a)(e);!(n=r()).done;){var i;if(null==(i=n.value.current)?void 0:i.contains(t))return!0}return!1}(i,a)?(n.preventDefault(),n.stopPropagation(),Object(p.d)(u)):(s.current=a,Object(p.d)(a)):Object(p.d)(s.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var j=n(140),h=new Set,g=new Map;function E(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function y(e){var t=g.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var w=Object(i.createContext)(!1);function C(e){return u.a.createElement(w.Provider,{value:e.force},e.children)}var S=n(35);function T(){var e=Object(i.useContext)(w),t=Object(i.useContext)(N),n=Object(i.useState)((function(){if(!e&&null!==t)return null;if("undefined"===typeof window)return null;var n=document.getElementById("headlessui-portal-root");if(n)return n;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=n[0],o=n[1];return Object(i.useEffect)((function(){null!==r&&(document.body.contains(r)||document.body.appendChild(r))}),[r]),Object(i.useEffect)((function(){e||null!==t&&o(t.current)}),[t,o,e]),r}var F=i.Fragment;function A(e){var t=e,n=T(),r=Object(i.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],o=Object(d.a)();return Object(j.a)((function(){if(n&&r)return n.appendChild(r),function(){var e;n&&(r&&(n.removeChild(r),n.childNodes.length<=0&&(null==(e=n.parentElement)||e.removeChild(n))))}}),[n,r]),o&&n&&r?Object(S.createPortal)(Object(c.d)({props:t,defaultTag:F,name:"Portal"}),r):null}var x=i.Fragment,N=Object(i.createContext)(null);A.Group=function(e){var t=e.target,n=Object(o.c)(e,["target"]);return u.a.createElement(N.Provider,{value:t},Object(c.d)({props:n,defaultTag:x,name:"Popover.Group"}))};var R=Object(i.createContext)(null);function L(){var e=Object(i.useContext)(R);if(null===e){var t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return e}var P,k,D,H,I=n(154),M=Object(i.createContext)((function(){}));function U(e){var t=e.children,n=e.onUpdate,r=e.type,o=e.element,a=Object(i.useContext)(M),c=Object(i.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n.apply(void 0,t),a.apply(void 0,t)}),[a,n]);return Object(j.a)((function(){return c(P.Add,r,o),function(){return c(P.Remove,r,o)}}),[c,r,o]),u.a.createElement(M.Provider,{value:c},t)}M.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(P||(P={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(D||(D={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(H||(H={}));var V=((k={})[H.SetTitleId]=function(e,t){return e.titleId===t.id?e:Object(o.b)({},e,{titleId:t.id})},k),q=Object(i.createContext)(null);function W(e){var t=Object(i.useContext)(q);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+z.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}function Y(e,t){return Object(a.a)(t.type,V,e,t)}q.displayName="DialogContext";var B=c.a.RenderStrategy|c.a.Static,G=Object(c.c)((function(e,t){var n,s=e.open,p=e.onClose,O=e.initialFocus,w=Object(o.c)(e,["open","onClose","initialFocus"]),S=Object(i.useState)(0),T=S[0],F=S[1],x=Object(I.c)();void 0===s&&null!==x&&(s=Object(a.a)(x,((n={})[I.b.Open]=!0,n[I.b.Closed]=!1,n)));var N=Object(i.useRef)(new Set),L=Object(i.useRef)(null),k=Object(l.a)(L,t),M=e.hasOwnProperty("open")||null!==x,V=e.hasOwnProperty("onClose");if(!M&&!V)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!M)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!V)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof s)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+s);if("function"!==typeof p)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+p);var W=s?D.Open:D.Closed,G=null!==x?x===I.b.Open:W===D.Open,_=Object(i.useReducer)(Y,{titleId:null,descriptionId:null}),z=_[0],J=_[1],K=Object(i.useCallback)((function(){return p(!1)}),[p]),$=Object(i.useCallback)((function(e){return J({type:H.SetTitleId,id:e})}),[J]),Q=Object(d.a)()&&W===D.Open,X=T>1,Z=null!==Object(i.useContext)(q),ee=X?"parent":"leaf";m(L,Q?Object(a.a)(ee,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:O,containers:N}),function(e,t){void 0===t&&(t=!0),Object(j.a)((function(){if(t&&e.current){var n=e.current;h.add(n);for(var r,i=Object(o.a)(g.keys());!(r=i()).done;){var u=r.value;u.contains(n)&&(y(u),g.delete(u))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var t,n=Object(o.a)(h);!(t=n()).done;){var r=t.value;if(e.contains(r))return}1===h.size&&(g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),E(e))}})),function(){if(h.delete(n),h.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!g.has(e)){for(var t,n=Object(o.a)(h);!(t=n()).done;){var r=t.value;if(e.contains(r))return}g.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),E(e)}}));else for(var e,t=Object(o.a)(g.keys());!(e=t()).done;){var r=e.value;y(r),g.delete(r)}}}}),[t])}(L,!!X&&Q),Object(b.a)("mousedown",(function(e){var t,n=e.target;W===D.Open&&(X||(null==(t=L.current)?void 0:t.contains(n))||K())})),Object(b.a)("keydown",(function(e){e.key===f.a.Escape&&W===D.Open&&(X||(e.preventDefault(),e.stopPropagation(),K()))})),Object(i.useEffect)((function(){if(W===D.Open&&!Z){var e=document.documentElement.style.overflow,t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=n+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=t}}}),[W,Z]),Object(i.useEffect)((function(){if(W===D.Open&&L.current){var e=new IntersectionObserver((function(e){for(var t,n=Object(o.a)(e);!(t=n()).done;){var r=t.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&K()}}));return e.observe(L.current),function(){return e.disconnect()}}}),[W,L,K]);var te=function(){var e=Object(i.useState)([]),t=e[0],n=e[1];return[t.length>0?t.join(" "):void 0,Object(i.useMemo)((function(){return function(e){var t=Object(i.useCallback)((function(e){return n((function(t){return[].concat(t,[e])})),function(){return n((function(t){var n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))}}),[]),r=Object(i.useMemo)((function(){return{register:t,slot:e.slot,name:e.name,props:e.props}}),[t,e.slot,e.name,e.props]);return u.a.createElement(R.Provider,{value:r},e.children)}}),[n])]}(),ne=te[0],re=te[1],oe="headlessui-dialog-"+Object(v.a)(),ie=Object(i.useMemo)((function(){return[{dialogState:W,close:K,setTitleId:$},z]}),[W,z,K,$]),ue=Object(i.useMemo)((function(){return{open:W===D.Open}}),[W]),ae={ref:k,id:oe,role:"dialog","aria-modal":W===D.Open||void 0,"aria-labelledby":z.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},ce=w;return u.a.createElement(U,{type:"Dialog",element:L,onUpdate:Object(i.useCallback)((function(e,t,n){var r;"Dialog"===t&&Object(a.a)(e,((r={})[P.Add]=function(){N.current.add(n),F((function(e){return e+1}))},r[P.Remove]=function(){N.current.add(n),F((function(e){return e-1}))},r))}),[])},u.a.createElement(C,{force:!0},u.a.createElement(A,null,u.a.createElement(q.Provider,{value:ie},u.a.createElement(A.Group,{target:L},u.a.createElement(C,{force:!1},u.a.createElement(re,{slot:ue,name:"Dialog.Description"},Object(c.d)({props:Object(o.b)({},ce,ae),slot:ue,defaultTag:"div",features:B,visible:G,name:"Dialog"}))))))))})),_=Object(c.c)((function e(t,n){var r=W([z.displayName,e.name].join("."))[0],u=r.dialogState,a=r.close,f=Object(l.a)(n),d="headlessui-dialog-overlay-"+Object(v.a)(),b=Object(i.useCallback)((function(e){if(e.target===e.currentTarget){if(Object(s.a)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),a()}}),[a]),p=Object(i.useMemo)((function(){return{open:u===D.Open}}),[u]),O={ref:f,id:d,"aria-hidden":!0,onClick:b},m=t;return Object(c.d)({props:Object(o.b)({},m,O),slot:p,defaultTag:"div",name:"Dialog.Overlay"})}));var z=Object.assign(G,{Overlay:_,Title:function e(t){var n=W([z.displayName,e.name].join("."))[0],r=n.dialogState,u=n.setTitleId,a="headlessui-dialog-title-"+Object(v.a)();Object(i.useEffect)((function(){return u(a),function(){return u(null)}}),[a,u]);var l=Object(i.useMemo)((function(){return{open:r===D.Open}}),[r]),f={id:a},s=t;return Object(c.d)({props:Object(o.b)({},s,f),slot:l,defaultTag:"h2",name:"Dialog.Title"})},Description:function(e){var t=L(),n="headlessui-description-"+Object(v.a)();Object(j.a)((function(){return t.register(n)}),[n,t.register]);var r=e,i=Object(o.b)({},t.props,{id:n});return Object(c.d)({props:Object(o.b)({},r,i),slot:t.slot||{},defaultTag:"p",name:t.name||"Description"})}})}}]);