(()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}angular.module("app",["ngSanitize","ngMaterial","ngMessages","ngMdIcons","ngclipboard","angular.snackbar","tooltips","fayzaan.gRecaptcha.v3"]).config(["$provide","$compileProvider","$mdThemingProvider","$sceDelegateProvider","$mdAriaProvider",function(t,o,n,r,a){o.debugInfoEnabled(!1),n.disableTheming(!0),a.disableWarnings(),t.decorator("$exceptionHandler",["$delegate",function(t){return function(o,n){t(o,n),window.reportError(JSON.stringify({exception:"object"==e(o)?o.stack:""+o,cause:""+n}))}}]),r.resourceUrlWhitelist(["https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@**"])}])})(),angular.module("app").controller("UtilsToolsController",["$scope","$window","$http","commonFunctionsService","gRecaptcha",function(e,t,o,n,r){e.tooltipCopySuccessful=n.tooltipCopySuccessful,e.track=n.track,e.trackSystem=n.trackSystem,e.showCountriesMenu=n.showCountriesMenu,r.initialize({key:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI"}),e.hideRecommendWallet=[],e.answers={},e.submitRecommendation=function(n){if(!e.hideRecommendWallet[n]){e.hideRecommendWallet[n]=!0;var a=angular.element(document.querySelector("#"+n+"-wallet-data .recommended-by-tag:not(.mock)"));if(a.length>0){var c=a.text().match(/\d/g).join("");a.text(a.text().replace(c,+c+1).replace("a.","as."))}r.execute({action:"submit_wallet_recommendation"}).then((function(r){e.answers.captcha_response=r;var a=t.BARNEY_ENDPOINT+"/wallet";e.answers.id=n,o.patch(a,e.answers)}))}}}]);