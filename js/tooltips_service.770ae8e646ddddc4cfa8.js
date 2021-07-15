!function(){"use strict";var t=function(t,e){return{restrict:"A",scope:{title:"@",fixedPosition:"=",titleClass:"@"},link:function(o,i,n){o.createTooltip=function(t){(n.title||n.tooltip)&&(o.getDirection(),o.tooltipElement=angular.element("<div>").addClass("angular-tooltip").addClass(o.titleClass),angular.element(document).find("body").hasClass("md-dialog-is-showing")?angular.element(document.getElementById("p2p-dialog")).append(o.tooltipElement):angular.element(document).find("body").append(o.tooltipElement),o.updateTooltip(n.title||n.tooltip),o.tooltipElement.addClass("angular-tooltip-fade-in"))},o.updateTooltip=function(n){o.tooltipElement.html(n),e(o.tooltipElement.contents())(o);var l=o.calculatePosition(o.tooltipElement,o.getDirection());o.tooltipElement.addClass("angular-tooltip-"+l.direction).css(l),t((function(){i.removeAttr("ng-attr-title"),i.removeAttr("title")}))},o.$watch("title",(function(t){o.tooltipElement&&o.updateTooltip(t)})),o.removeTooltip=function(){angular.element(document.querySelectorAll(".angular-tooltip")).remove()},o.getDirection=function(){return i.attr("tooltip-direction")||i.attr("title-direction")||"top"},o.calculatePosition=function(t,e){var n=t[0].getBoundingClientRect(),l=i[0].getBoundingClientRect(),r=window.scrollX||document.documentElement.scrollLeft,a=window.scrollY||document.documentElement.scrollTop,p=12,s={},c=null;return o.stringStartsWith(e,"left")?s.left=l.left-n.width-6+r:o.stringStartsWith(e,"right")?s.left=l.left+l.width+6+r:o.stringContains(e,"left")?s.left=l.left-n.width+p+r:o.stringContains(e,"right")?s.left=l.left+l.width-p+r:s.left=l.left+l.width/2-n.width/2+r,o.stringStartsWith(e,"top")?s.top=l.top-n.height-6+a:o.stringStartsWith(e,"bottom")?s.top=l.top+l.height+6+a:o.stringContains(e,"top")?s.top=l.top-n.height+p+a:o.stringContains(e,"bottom")?s.top=l.top+l.height-p+a:s.top=l.top+l.height/2-n.height/2+a,o.fixedPosition&&(s.left<r?c=e.replace("left","right"):s.left+n.width>window.innerWidth+r&&(c=e.replace("right","left")),s.top<a?c=e.replace("top","bottom"):s.top+n.height>window.innerHeight+a&&(c=e.replace("bottom","top")),c)?o.calculatePosition(t,c):(s.left+="px",s.top+="px",s.direction=e,s)},o.stringStartsWith=function(t,e){return t.substr(0,e.length)===e},o.stringContains=function(t,e){return-1!==t.indexOf(e)},n.title||n.tooltip?(i.on("mouseover",o.createTooltip),i.on("mouseout",o.removeTooltip)):(i.off("mouseover",o.createTooltip),i.off("mouseout",o.removeTooltip)),i.on("destroy",o.removeTooltip),o.$on("$destroy",o.removeTooltip)}}};t.$inject=["$timeout","$compile"],angular.module("tooltips",[]).directive("title",t).directive("tooltip",t)}();