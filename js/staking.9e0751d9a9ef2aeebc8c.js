(()=>{function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(e)}angular.module("app",["ngSanitize","ngMaterial","ngMessages","ngMdIcons","ngclipboard","angular.snackbar","angular-carousel"]).config(["$provide","$compileProvider","$mdThemingProvider","$sceDelegateProvider","$mdAriaProvider",function(e,n,r,t,a){n.debugInfoEnabled(!1),r.disableTheming(!0),a.disableWarnings(),e.decorator("$exceptionHandler",["$delegate",function(e){return function(n,r){e(n,r),window.reportError(JSON.stringify({exception:"object"==o(n)?n.stack:""+n,cause:""+r}))}}]),t.resourceUrlWhitelist(["https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@**"])}])})(),angular.module("app").controller("StakingController",["$scope","$mdDialog","commonFunctionsService",function(o,e,n){o.tooltipCopySuccessful=n.tooltipCopySuccessful,o.track=n.track,o.trackSystem=n.trackSystem,o.showCountriesMenu=n.showCountriesMenu,o.toFixed=function(o,e){var n=new RegExp("^-?\\d+(?:.\\d{0,"+(e||-1)+"})?");return o.toString().match(n)?o.toString().match(n)[0]:null},o.provider_list=[],o.orderByCoin=void 0,o.changeOrder=function(e,n){var r=Object.keys(e).map((function(o){return[o,e[o]]}));r.sort((function(o,e){for(var r in aa=void 0,bb=void 0,o[1].coins)if(o[1].coins[r].symbol==n){aa=o[1].coins[r].rate;break}for(var r in e[1].coins)if(e[1].coins[r].symbol==n){bb=e[1].coins[r].rate;break}return"-"==aa&&"-"==bb||"-"==aa&&"-"!=bb?1:"-"!=aa&&"-"==bb?-1:bb-aa}));for(var t=[],a=0;a<r.length;++a)t.push(r[a][0]);o.provider_list=t,o.orderByCoin=n},o.cancelModal=function(){e.cancel()},o.showAPYModal=function(n,r){o.coinToCalculateApy=n,e.show({contentElement:"#apy-dialog",parent:angular.element(document.body),targetEvent:r,clickOutsideToClose:!0,escapeToClose:!0,fullscreen:!1})}}]);