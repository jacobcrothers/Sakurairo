(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[478],{3975:function(t){var e,i,o,n,s,a;t.exports=(e=function(){return(e=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},i="lgContainerResize",o="lgSlideItemLoad",n="lgBeforeSlide",s="lgAfterSlide",a={relativeCaption:!1},function(){function t(t){this.core=t;var i={addClass:this.core.settings.addClass+" lg-relative-caption"};return this.core.settings=e(e({},this.core.settings),i),this.settings=e(e(e({},a),this.core.settings),i),this}return t.prototype.init=function(){var t=this;this.settings.relativeCaption&&(this.core.LGel.on(o+".caption",(function(e){var i=e.detail,o=i.index,n=i.delay;setTimeout((function(){o===t.core.index&&t.setRelativeCaption(o)}),n)})),this.core.LGel.on(s+".caption",(function(e){var i=e.detail.index;setTimeout((function(){t.core.getSlideItem(i).hasClass("lg-complete")&&t.setRelativeCaption(i)}))})),this.core.LGel.on(n+".caption",(function(e){var i=e.detail.index;setTimeout((function(){t.core.getSlideItem(i).removeClass("lg-show-caption")}))})),this.core.LGel.on(i+".caption",(function(e){t.setRelativeCaption(t.core.index)})))},t.prototype.setCaptionStyle=function(t,e,i){var o=this.core.getSlideItem(t).find(".lg-relative-caption-item"),n=this.core.getSlideItem(t).find(".lg-sub-html");n.css("width",e.width+"px").css("left",e.left+"px");var s=o.get().getBoundingClientRect(),a=i.bottom-e.bottom-s.height;n.css("top","auto").css("bottom",Math.max(a,0)+"px")},t.prototype.setRelativeCaption=function(t){var e=this.core.getSlideItem(t);if(e.hasClass("lg-current")){var i=this.core.getSlideItem(t).find(".lg-object").get().getBoundingClientRect(),o=this.core.getSlideItem(t).get().getBoundingClientRect();this.setCaptionStyle(t,i,o),e.addClass("lg-show-caption")}},t.prototype.destroy=function(){this.core.LGel.off(".caption")},t}())}}]);
//# sourceMappingURL=lg-6.js.map