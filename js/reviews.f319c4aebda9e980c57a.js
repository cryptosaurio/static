(()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}angular.module("app",["ngSanitize","ngRoute","ngMaterial","ngMessages","ngMdIcons","ngclipboard","angular.snackbar","star-rating","afklStickyElement","angularPagination","ngLocationUpdate","fayzaan.gRecaptcha.v3"]).config(["$provide","$compileProvider","$mdThemingProvider","$sceDelegateProvider","$locationProvider","$mdAriaProvider",function(t,i,n,r,a,o){i.debugInfoEnabled(!1),n.disableTheming(!0),o.disableWarnings(),t.decorator("$exceptionHandler",["$delegate",function(t){return function(i,n){t(i,n),window.reportError(JSON.stringify({exception:"object"==e(i)?i.stack:""+i,cause:""+n}))}}]),r.resourceUrlWhitelist(["https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@**","**/partials/*"]),a.html5Mode(!0)}])})(),angular.module("app").controller("ReviewsController",["$scope","$window","$location","$http","$timeout","$mdDialog","Pagination","gRecaptcha","commonFunctionsService",function(e,t,i,n,r,a,o,s,l){e.tooltipCopySuccessful=l.tooltipCopySuccessful,e.track=l.track,e.trackSystem=l.trackSystem,e.showCountriesMenu=l.showCountriesMenu,e.redirectTo=function(e){t.open(e,"_blank")},e.hideNews=function(e){try{return!!JSON.parse(t.localStorage.getItem(e+"_gift_news_closed"))||!1}catch(e){return!1}},e.closeNews=function(e,i){try{t.localStorage.setItem(e+"_gift_news_closed",!0)}catch(e){}},s.initialize({key:"6Le6vr8ZAAAAAH6G2kvLs-VDT1cKIa_UGepnpMBI"}),e.showDialogButtonEnabled=!0;var c=!1,u=function(e){c=e};e.showReviewSubmitDialog=function(i){e.showDialogButtonEnabled&&(e.showDialogButtonEnabled=!1,a.show({controller:"ReviewSubmitDialogController",templateUrl:"/"+t.COUNTRY+"/partials/review-submit-dialog",parent:angular.element(document.body),targetEvent:i,clickOutsideToClose:!0,escapeToClose:!0,fullscreen:!0,locals:{extraParameters:{providerSelected:e.providerSelected,context:"review-page"},changeSubmittedState:u,gRecaptchaV3:s},onComplete:function(){e.showDialogButtonEnabled=!0},onRemoving:function(i,n){c&&e.fetchReviewsWhenChangeOrderByOption("br"==t.COUNTRY?"mais-recentes":"mas-recientes",!0)}}))},e.fetchReviewsWhenChangeOrderByOption=function(t,i){e.orderByOption.option=t,e.pagination=o.create({itemsPerPage:5,itemsCount:e.reviewsCount,maxNumbers:5,currentPage:1}),e.changeReviewsPage(1,void 0,i)},e.fetchReviews=function(i){i=i||1;var r=e.providerSelected.indexOf("p2p")>-1?"?merge=true":"";n.get(t.BARNEY_ENDPOINT+"/reviews/"+e.providerSelected+"/"+e.orderByOption.option+"/"+i+r).then((function(t){e.reviews=t.data}),(function(){}))},r((function(){e.pagination=o.create({itemsPerPage:5,itemsCount:e.reviewsCount,maxNumbers:5,currentPage:e.page}),e.fetchReviews(e.page)}),0),e.getReviews=function(){return e.reviews},e.getPageUrl=function(i){return"/"+t.COUNTRY+"/opiniones/"+e.providerSelected+"/"+e.orderByOption.option+"/"+i},e.changeReviewsPage=function(t,n,r){n&&n.preventDefault(),(i.path()!=e.getPageUrl(t)||r)&&(i.update_path(e.getPageUrl(t),!1),e.fetchReviews(t))},e.vote=function(e,i){("upvote"==i&&!e.already_upvoted||"downvote"==i&&!e.already_downvoted)&&("upvote"==i?(e.already_upvoted=!0,e.upvoted+=1):"downvote"==i&&(e.already_downvoted=!0,e.downvoted+=1),s.execute({action:"vote_review"}).then((function(r){var a=t.BARNEY_ENDPOINT+"/"+t.COUNTRY+"/review/";"br"!=t.COUNTRY&&(a=t.BARNEY_ENDPOINT+"/review/"),n.patch(a,{id:e.pk,operation_type:i,captcha_response:r})})))}}]),angular.module("app").controller("ReviewSubmitDialogController",["$scope","$window","$timeout","$http","$mdDialog","extraParameters","changeSubmittedState","gRecaptchaV3",function(e,t,i,n,r,a,o,s){e.step1=!0,e.step2=!1,e.context=a.context,e.providerSelected=a.providerSelected,e.answers={provider_id:a.providerSelected,review_comment:"",transfer_speed_rating:0,liquidity_rating:0,usability_rating:0,support_rating:0,arbitrage_quality:-2},e.submitReview=function(){var r=!1;e.answers.transfer_speed_rating<1&&e.answers.liquidity_rating<1&&(r||(angular.element(-1==e.answers.provider_id.indexOf("p2p")?document.querySelector("#transfer-speed-rating-div"):document.querySelector("#liquidity-rating-div"))[0].scrollIntoView(),r=!0),e.transfer_speed_rating_is_invalid=!0),e.answers.usability_rating<1&&(r||(angular.element(document.querySelector("#usability-rating-div"))[0].scrollIntoView(),r=!0),e.usability_rating_is_invalid=!0),e.answers.support_rating<1&&(r||(angular.element(document.querySelector("#support-rating-div"))[0].scrollIntoView(),r=!0),e.support_rating_is_invalid=!0),-2==e.answers.arbitrage_quality&&-1==e.answers.provider_id.indexOf("p2p")&&(r||(angular.element(document.querySelector("#arbitrage-quality-div"))[0].scrollIntoView(),r=!0),e.arbitrage_quality_is_invalid=!0),(e.answers.review_comment.length<20||e.answers.review_comment.length>1500)&&(r||(angular.element(document.querySelector("#review-comment-area-div"))[0].scrollIntoView(),r=!0),e.review_comment_area_is_invalid=!0,e.review_comment_area_was_invalid=!0),e.review_comment_area_is_invalid||e.transfer_speed_rating_is_invalid||e.usability_rating_is_invalid||e.support_rating_is_invalid||e.arbitrage_quality_is_invalid?i((function(){e.review_comment_area_is_invalid=!1,e.transfer_speed_rating_is_invalid=!1,e.usability_rating_is_invalid=!1,e.support_rating_is_invalid=!1,e.arbitrage_quality_is_invalid=!1}),1e3):e.submitting||(e.submitting=!0,s.execute({action:"submit_review"}).then((function(i){e.answers.captcha_response=i;var r=t.BARNEY_ENDPOINT+"/"+t.COUNTRY+"/reviews/";"br"!=t.COUNTRY&&(r=t.BARNEY_ENDPOINT+"/reviews/"),n.put(r,e.answers),e.step1=!1,o(!0),e.step2=!0,e.submitting=!1})))},e.onRatingChange=function(t,i){e.answers[t]=i},e.getSelectedProvider=function(e){return angular.element(document.querySelectorAll('[value="'+e+'"]')).text().trim()},e.getSeeProviderReviewsUrl=function(e){return"/"+t.COUNTRY+"/opiniones/"+e+"/"},e.cancelModal=function(){r.cancel()}}]);