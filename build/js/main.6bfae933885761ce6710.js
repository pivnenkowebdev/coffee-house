!function(){var t,e={248:function(t,e,i){"use strict";var s=i(7091),n=i.n(s),r=new URL(i(1351),i.b),o=new URL(i(3648),i.b),u=new URL(i(3017),i.b),a=new URL(i(1422),i.b),h=new URL(i(1319),i.b),c=new URL(i(8836),i.b),l=new URL(i(9189),i.b),d=new URL(i(9053),i.b),p=new URL(i(8830),i.b),f=new URL(i(1090),i.b),S=new URL(i(2020),i.b),w=new URL(i(4223),i.b),v=new URL(i(1975),i.b),m=new URL(i(4043),i.b),b=new URL(i(2996),i.b);n()(r),n()(o),n()(u),n()(a),n()(h),n()(c),n()(l),n()(d),n()(p),n()(f),n()(S),n()(w),n()(v),n()(m),n()(b),i(832),i(3022)},3022:function(){document.addEventListener("DOMContentLoaded",(function(){alert("Привет!) \n Пожалуйста перед проверкой почисти КЭШ \n Ты можешь сделать это с помощью сочетания клавиш \n ctrl + shift + r \n или \n ctrl + f5 \n Да прибудет с тобой сила!)"),new class{constructor(t){this.slider=t,this.arrowPrev=this.slider.querySelector('[data-arrow="prev"]'),this.arrowNext=this.slider.querySelector('[data-arrow="next"]'),this.sliderTrack=this.slider.querySelector("#sliderTrack"),this.allSlides=this.slider.querySelectorAll(".slide"),this.timeShowStatus=document.querySelectorAll(".controll-slider__btn"),this.counterSlides=0,this.slideWidth=this.allSlides[0].offsetWidth,this.pointStartSwipe=null,this.pointEndSwipe=null,this.isPause=!1,this.isMoved=!1,this.showStatus(),this.automaticMoution(),this.arrowPrev.addEventListener("click",this.actionSlider.bind(this,"prev")),this.arrowNext.addEventListener("click",this.actionSlider.bind(this,"next")),this.sliderTrack.addEventListener("touchstart",(t=>{this.onPauseMoution(),this.startSwipe(t)})),this.sliderTrack.addEventListener("touchend",(t=>{this.offPauseMoution(),this.pointStartSwipe=null,this.pointEndSwipe=null})),this.sliderTrack.addEventListener("touchmove",(t=>{t.preventDefault(),this.endSwipe(t),this.pointStartSwipe>this.pointEndSwipe+this.slideWidth/2?(this.actionSlider("next"),this.isMoved=!0):this.pointStartSwipe<this.pointEndSwipe-this.slideWidth/2&&(this.actionSlider("prev"),this.isMoved=!0),setTimeout((()=>{this.isMoved=!1}),1e3)})),this.sliderTrack.addEventListener("mouseover",this.onPauseMoution.bind(this)),this.sliderTrack.addEventListener("mouseout",this.offPauseMoution.bind(this))}actionSlider(t){this.isMoved||("prev"===t?(this.counterSlides--,this.counterSlides<0&&(this.counterSlides=this.allSlides.length-1),this.resetTimer(),this.moutionSlider(),this.showStatus(),this.automaticMoution()):"next"===t&&(this.counterSlides++,this.counterSlides>=this.allSlides.length&&(this.counterSlides=0),this.resetTimer(),this.moutionSlider(),this.showStatus(),this.automaticMoution()),this.isMoved=!0,setTimeout((()=>{this.isMoved=!1}),500))}moutionSlider(){this.sliderTrack.style.transform=`translateX(${this.slideWidth*-this.counterSlides}px)`}automaticMoution(){this.interval=setInterval((()=>{this.isPause||this.isMoved||(this.actionSlider("next"),this.showStatus(this.isPause))}),7e3)}resetTimer(){clearInterval(this.interval)}onPauseMoution(){this.isPause=!0,this.showStatus()}offPauseMoution(){this.isPause=!1,this.showStatus()}startSwipe(t){t.preventDefault(),this.pointStartSwipe=t.changedTouches[0].pageX}endSwipe(t){t.preventDefault(),this.pointEndSwipe=t.changedTouches[0].pageX}showStatus(){for(let t=0;t<this.timeShowStatus.length;t++){const e=this.timeShowStatus[t];t===this.counterSlides?(e.firstElementChild.classList.add("moution"),e.firstElementChild.style.animationPlayState=this.isPause?"paused":"running"):e.firstElementChild.classList.remove("moution")}}}(document.querySelector("#slider"))}))},9053:function(t,e,i){"use strict";t.exports=i.p+"./img/about-1.jpg"},2020:function(t,e,i){"use strict";t.exports=i.p+"./img/about-2.jpg"},8830:function(t,e,i){"use strict";t.exports=i.p+"./img/about-3.jpg"},1090:function(t,e,i){"use strict";t.exports=i.p+"./img/about-4.jpg"},1319:function(t,e,i){"use strict";t.exports=i.p+"./img/coffee-slider-1.png"},8836:function(t,e,i){"use strict";t.exports=i.p+"./img/coffee-slider-2.png"},9189:function(t,e,i){"use strict";t.exports=i.p+"./img/coffee-slider-3.png"},1422:function(t,e,i){"use strict";t.exports=i.p+"./img/img-hero.png"},4223:function(t,e,i){"use strict";t.exports=i.p+"./img/mobile-screens.png"},3017:function(t,e,i){"use strict";t.exports=i.p+"./video/video-_2160p_.webm"}},i={};function s(t){var n=i[t];if(void 0!==n)return n.exports;var r=i[t]={exports:{}};return e[t](r,r.exports,s),r.exports}s.m=e,t=[],s.O=function(e,i,n,r){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],n=t[c][1],r=t[c][2];for(var u=!0,a=0;a<i.length;a++)(!1&r||o>=r)&&Object.keys(s.O).every((function(t){return s.O[t](i[a])}))?i.splice(a--,1):(u=!1,r<o&&(o=r));if(u){t.splice(c--,1);var h=n();void 0!==h&&(e=h)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,n,r]},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,{a:e}),e},s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;s.g.importScripts&&(t=s.g.location+"");var e=s.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!t;)t=i[n--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t+"../"}(),function(){s.b=document.baseURI||self.location.href;var t={179:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,r,o=i[0],u=i[1],a=i[2],h=0;if(o.some((function(e){return 0!==t[e]}))){for(n in u)s.o(u,n)&&(s.m[n]=u[n]);if(a)var c=a(s)}for(e&&e(i);h<o.length;h++)r=o[h],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},i=self.webpackChunkwebpack=self.webpackChunkwebpack||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}(),s.O(void 0,[592],(function(){return s(6981)}));var n=s.O(void 0,[592],(function(){return s(248)}));n=s.O(n)}();