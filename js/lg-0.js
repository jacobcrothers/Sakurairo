(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[963],{539:function(t){var o,e,s,r,a,i,l,n,u,p;t.exports=(o=function(){return(o=Object.assign||function(t){for(var o,e=1,s=arguments.length;e<s;e++)for(var r in o=arguments[e])Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t}).apply(this,arguments)},e="lgSlideItemLoad",s="lgBeforeSlide",r="lgAfterSlide",a="lgDragStart",i="lgDragEnd",l="lgAutoplay",n="lgAutoplayStart",u="lgAutoplayStop",p={autoplay:!0,slideShowAutoplay:!1,slideShowInterval:5e3,progressBar:!0,forceSlideShowAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar",autoplayPluginStrings:{toggleAutoplay:"Toggle Autoplay"}},function(){function t(t){return this.core=t,this.settings=o(o({},p),this.core.settings),this}return t.prototype.init=function(){var t=this;this.settings.autoplay&&(this.interval=!1,this.fromAuto=!0,this.pausedOnTouchDrag=!1,this.pausedOnSlideChange=!1,this.settings.autoplayControls&&this.controls(),this.settings.progressBar&&this.core.outer.append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),this.settings.slideShowAutoplay&&this.core.LGel.once(e+".autoplay",(function(){t.startAutoPlay()})),this.core.LGel.on(a+".autoplay touchstart.lg.autoplay",(function(){t.interval&&(t.stopAutoPlay(),t.pausedOnTouchDrag=!0)})),this.core.LGel.on(i+".autoplay touchend.lg.autoplay",(function(){!t.interval&&t.pausedOnTouchDrag&&(t.startAutoPlay(),t.pausedOnTouchDrag=!1)})),this.core.LGel.on(s+".autoplay",(function(){t.showProgressBar(),!t.fromAuto&&t.interval?(t.stopAutoPlay(),t.pausedOnSlideChange=!0):t.pausedOnSlideChange=!1,t.fromAuto=!1})),this.core.LGel.on(r+".autoplay",(function(){t.pausedOnSlideChange&&!t.interval&&t.settings.forceSlideShowAutoplay&&(t.startAutoPlay(),t.pausedOnSlideChange=!1)})),this.showProgressBar())},t.prototype.showProgressBar=function(){var t=this;if(this.settings.progressBar&&this.fromAuto){var o=this.core.outer.find(".lg-progress-bar"),e=this.core.outer.find(".lg-progress");this.interval&&(e.removeAttr("style"),o.removeClass("lg-start"),setTimeout((function(){e.css("transition","width "+(t.core.settings.speed+t.settings.slideShowInterval)+"ms ease 0s"),o.addClass("lg-start")}),20))}},t.prototype.controls=function(){var t=this,o='<button aria-label="'+this.settings.autoplayPluginStrings.toggleAutoplay+'" type="button" class="lg-autoplay-button lg-icon"></button>';this.core.outer.find(this.settings.appendAutoplayControlsTo).append(o),this.core.outer.find(".lg-autoplay-button").first().on("click.lg.autoplay",(function(){t.core.outer.hasClass("lg-show-autoplay")?t.stopAutoPlay():t.interval||t.startAutoPlay()}))},t.prototype.startAutoPlay=function(){var t=this;this.core.outer.find(".lg-progress").css("transition","width "+(this.core.settings.speed+this.settings.slideShowInterval)+"ms ease 0s"),this.core.outer.addClass("lg-show-autoplay"),this.core.outer.find(".lg-progress-bar").addClass("lg-start"),this.core.LGel.trigger(n,{index:this.core.index}),this.interval=setInterval((function(){t.core.index+1<t.core.galleryItems.length?t.core.index++:t.core.index=0,t.core.LGel.trigger(l,{index:t.core.index}),t.fromAuto=!0,t.core.slide(t.core.index,!1,!1,"next")}),this.core.settings.speed+this.settings.slideShowInterval)},t.prototype.stopAutoPlay=function(){this.interval&&(this.core.LGel.trigger(u,{index:this.core.index}),this.core.outer.find(".lg-progress").removeAttr("style"),this.core.outer.removeClass("lg-show-autoplay"),this.core.outer.find(".lg-progress-bar").removeClass("lg-start")),clearInterval(this.interval),this.interval=!1},t.prototype.closeGallery=function(){this.stopAutoPlay()},t.prototype.destroy=function(){this.settings.autoplay&&this.core.outer.find(".lg-progress-bar").remove(),this.core.LGel.off(".lg.autoplay"),this.core.LGel.off(".autoplay")},t}())}}]);
//# sourceMappingURL=lg-0.js.map