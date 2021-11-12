"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();document.addEventListener("DOMContentLoaded",function(){new(function(){function t(e){_classCallCheck(this,t);this.options=Object.assign({isOpen:function(){},isClose:function(){}},e),this.modal=document.querySelector(".modal"),this.speed=!1,this.animation=!1,this.isOpen=!1,this.modalContainer=!1,this.previousActiveElement=!1,this.fixBlocks=document.querySelectorAll(".fix-block"),this.focusElements=["a[href]","input","button","select","textarea","[tabindex]"],this.events()}return _createClass(t,[{key:"events",value:function(){this.modal&&(document.addEventListener("click",function(e){var t=e.target.closest("[data-path]");if(t){var n=t.dataset.path,i=t.dataset.animation,s=t.dataset.speed;return this.animation=i||"fade",this.speed=s?parseInt(s):300,this.modalContainer=document.querySelector('[data-target="'+n+'"]'),void this.open()}e.target.closest(".modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(e){27==e.keyCode&&this.isOpen&&this.close(),9==e.keyCode&&this.isOpen&&this.focusCatch(e)}.bind(this)),this.modal.addEventListener("click",function(e){e.target.classList.contains("modal__container")||e.target.closest(".modal__container")||!this.isOpen||this.close()}.bind(this)))}},{key:"open",value:function(){var e=this;this.previousActiveElement=document.activeElement,this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.modal.classList.add("is-open"),this.disableScroll(),this.modalContainer.classList.add("modal-open"),this.modalContainer.classList.add(this.animation),setTimeout(function(){e.options.isOpen(e),e.modalContainer.classList.add("animate-open"),e.isOpen=!0,e.focusTrap()},this.speed)}},{key:"close",value:function(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("modal-open"),this.enableScroll(),this.options.isClose(this),this.isOpen=!1,this.focusTrap())}},{key:"focusCatch",value:function(e){var t=this.modalContainer.querySelectorAll(this.focusElements),n=Array.prototype.slice.call(t),i=n.indexOf(document.activeElement);e.shiftKey&&0===i&&(n[n.length-1].focus(),e.preventDefault()),e.shiftKey||i!==n.length-1||(n[0].focus(),e.preventDefault())}},{key:"focusTrap",value:function(){var e=this.modalContainer.querySelectorAll(this.focusElements);this.isOpen?e[0].focus():this.previousActiveElement.focus()}},{key:"disableScroll",value:function(){var e=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=e,document.body.style.top=-e+"px"}},{key:"enableScroll",value:function(){var e=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scroll({top:e,left:0}),document.body.removeAttribute("data-position")}},{key:"lockPadding",value:function(){var t=window.innerWidth-document.body.offsetWidth+"px";this.fixBlocks.forEach(function(e){e.style.paddingRight=t}),document.body.style.paddingRight=t}},{key:"unlockPadding",value:function(){this.fixBlocks.forEach(function(e){e.style.paddingRight="0px"}),document.body.style.paddingRight="0px"}}]),t}())({});var i=document.querySelectorAll(".rating");0<i.length&&function(){function e(e){s(e),o(),e.classList.contains("rating__set")&&function(i){for(var e=i.querySelectorAll(".rating__item"),t=function(t){var n=e[t];n.addEventListener("mouseenter",function(e){s(i),o(n.value)}),n.addEventListener("mouseleave",function(e){o()}),n.addEventListener("click",function(e){s(i),i.dataset.ajax?setRatingValue(n.value,i):(a.innerHTML=t+1,o())})},n=0;n<e.length;n++)t(n)}(e)}function s(e){t=e.querySelector(".rating__active"),a=e.querySelector(".rating__value")}function o(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:a.innerHTML)/.05;t.style.width=e+"%"}for(var t=void 0,a=void 0,n=0;n<i.length;n++)e(i[n])}();var s,o,a=document.querySelector(".wrapper");s="header-sticky",o=1,window.addEventListener("scroll",function(){var e=window.scrollY,t=document.getElementById(s).offsetHeight,n=o,i=document.getElementById(s);n<=e?(i.classList.add("sticky"),a.style.paddingTop=t+"px"):(i.classList.remove("sticky"),a.style.paddingTop=null)});var e,t,n,l;e="nav-toggle",t="nav-menu",n=document.getElementById(e),l=document.getElementById(t),n&&l&&n.addEventListener("click",function(){l.classList.toggle("show-menu"),n.classList.toggle("active")});new Swiper(".slider-print__container",{slidesPerView:1,allowTouchMove:!1,speed:1e3,navigation:{nextEl:".slider-print__control-next",prevEl:".slider-print__control-prev"},pagination:{el:".print__pagination",type:"custom",renderCustom:function(e,t,n){return("0"+t).slice(-2)+" / "+("0"+n).slice(-2)}},parallax:!0}),new Swiper(".slider-img__container",{slidesPerView:1,navigation:{nextEl:".slider-img__control-next",prevEl:".slider-img__control-prev"}});var r=document.querySelectorAll(".cases__navigation-item"),c=document.querySelectorAll(".cases__item");r.forEach(function(i){i.addEventListener("click",function(){var e=i,t=e.getAttribute("data-tab"),n=document.querySelector(t);r.forEach(function(e){e.classList.remove("active")}),c.forEach(function(e){e.classList.remove("active")}),e.classList.add("active"),n.classList.add("active")})});var d=document.querySelectorAll(".cases__slider");if(0<d.length){var u=[];d.forEach(function(e,t){e.classList.add("instance-"+t);var n=e.closest(".cases__block");n.querySelector(".cases__controls").classList.add("cases__controls-"+t),n.querySelector(".cases__control-prev").classList.add("prev-"+t),n.querySelector(".cases__control-next").classList.add("next-"+t),u[t]=new Swiper(".instance-"+t,{observer:!0,observeParents:!0,navigation:{prevEl:".prev-"+t,nextEl:".next-"+t}})}),u[2].update(),setTimeout(function(){var e=!0,t=!1,n=void 0;try{for(var i,s=u[Symbol.iterator]();!(e=(i=s.next()).done);e=!0){i.value.update()}}catch(e){t=!0,n=e}finally{try{!e&&s.return&&s.return()}finally{if(t)throw n}}},50)}var m=document.querySelector('input[type="tel"]');new Inputmask("+7 (999) 999-99-99").mask(m);var v,h;v=".form-callback",h={email:{required:!0,email:!0},tel:{required:!0},name:{required:!0}},new window.JustValidate(v,{rules:h,submitHandler:function(e){var t=new FormData(e),n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status&&console.log("Отправлено")},n.open("POST","mail.php",!0),n.send(t),e.reset()}})});