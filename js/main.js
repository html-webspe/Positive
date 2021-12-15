"use strict";document.addEventListener("DOMContentLoaded",function(){function t(){var e=document.getElementById("nav-menu"),t=document.getElementById("nav-toggle");!function(){for(var e=document.querySelectorAll(".scroll-to"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){e.preventDefault();var t=e.target.getAttribute("href").substring(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})})}(),e.classList.remove("show-menu"),t.classList.remove("active")}function e(){if(x){var e=window.scrollY,t=x.offsetHeight;x.offsetTop+t<e&&($(".video").html(" "),$(".video").fadeOut(),$(".video-poster").fadeIn(),$(".video-btn__play").fadeIn())}}var r=document.querySelectorAll("[data-spollers]");if(0<r.length){var l=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];e.forEach(function(e){e=t?e.item:e,t.matches||!t?(e.classList.add("_init"),n(e),e.addEventListener("click",i)):(e.classList.remove("_init"),n(e,!1),e.removeEventListener("click",i))})},n=function(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],r=e.querySelectorAll("[data-spoller]");0<r.length&&r.forEach(function(e){t?(e.removeAttribute("tabindex"),e.classList.contains("_active")||(e.nextElementSibling.hidden=!0)):(e.setAttribute("tabindex","-1"),e.nextElementSibling.hidden=!1)})},i=function(e){var t=e.target;if(t.hasAttribute("data-spoller")||t.closest("[data-spoller]")){var r=t.hasAttribute("data-spoller")?t:t.closest("[data-spoller]"),n=r.closest("[data-spollers]"),i=!!n.hasAttribute("data-one-spoller");n.querySelectorAll("._slide").length||(i&&!r.classList.contains("_active")&&o(n),r.classList.toggle("_active"),m(r.nextElementSibling,500)),e.preventDefault()}},o=function(e){var t=e.querySelector("[data-spoller]._active");t&&(t.classList.remove("_active"),p(t.nextElementSibling,500))},s=Array.from(r).filter(function(e,t,r){return!e.dataset.spollers.split(",")[0]});0<s.length&&l(s);var a=Array.from(r).filter(function(e,t,r){return e.dataset.spollers.split(",")[0]});if(0<a.length){var c=[];a.forEach(function(e){var t={},r=e.dataset.spollers.split(",");t.value=r[0],t.type=r[1]?r[1].trim():"max",t.item=e,c.push(t)});var d=c.map(function(e){return"("+e.type+"-width: "+e.value+"px),"+e.value+","+e.type});(d=d.filter(function(e,t,r){return r.indexOf(e)===t})).forEach(function(e){var t=e.split(","),r=t[1],n=t[2],i=window.matchMedia(t[0]),o=c.filter(function(e){if(e.value===r&&e.type===n)return!0});i.addListener(function(){l(o,i)}),l(o,i)})}}var u,v,p=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500;e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(function(){e.hidden=!0,e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")},t))},m=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500;return e.hidden?function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:500;if(!e.classList.contains("_slide")){e.classList.add("_slide"),e.hidden&&(e.hidden=!1);var r=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("_slide")},t)}}(e,t):p(e,t)},y=document.querySelector(".wrapper");u="header-sticky",v=1,window.addEventListener("scroll",function(){var e=window.scrollY,t=document.getElementById(u).offsetHeight,r=v,n=document.getElementById(u);r<=e?(n.classList.add("sticky"),y.style.paddingTop=t+"px"):(n.classList.remove("sticky"),y.style.paddingTop=null)});var f,g,h,_;f="nav-toggle",g="nav-menu",h=document.getElementById(f),_=document.getElementById(g),h&&_&&h.addEventListener("click",function(){_.classList.toggle("show-menu"),h.classList.toggle("active")}),function(){for(var e=document.querySelectorAll(".ibg"),t=0;t<e.length;t++)e[t].querySelector("img")&&null!=e[t].querySelector("img").getAttribute("src")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}();new Swiper(".slider-print__container",{slidesPerView:1,allowTouchMove:!1,speed:1e3,navigation:{nextEl:".slider-print__control-next",prevEl:".slider-print__control-prev"},pagination:{el:".print__pagination",type:"custom",renderCustom:function(e,t,r){return("0"+t).slice(-2)+" / "+("0"+r).slice(-2)}},parallax:!0}),new Swiper(".print-img__container",{slidesPerView:1,navigation:{nextEl:".print-img__control-next",prevEl:".print-img__control-prev"}});var w=document.querySelector(".product__slider");w&&new Swiper(w,{slidesPerView:2,slidesPerColumn:2,slidesPerColumnFill:"row",navigation:{nextEl:".product__control-next",prevEl:".product__control-prev"},breakpoints:{767:{slidesPerView:3,slidesPerColumn:2},1024:{slidesPerView:4,slidesPerColumn:2}}}),document.querySelectorAll(".menu__link").forEach(function(e){return e.addEventListener("click",t)});var E=document.querySelectorAll(".cases__navigation-item"),S=document.querySelectorAll(".cases__item");E.forEach(function(n){n.addEventListener("click",function(){var e=n,t=e.getAttribute("data-tab"),r=document.querySelector(t);E.forEach(function(e){e.classList.remove("active")}),S.forEach(function(e){e.classList.remove("active")}),e.classList.add("active"),r.classList.add("active")})});var L=document.querySelectorAll(".cases__slider-body");if(0<L.length){var b=[];L.forEach(function(e,t){e.classList.add("instance-"+t);var r=e.closest(".cases__block");r.querySelector(".cases__controls").classList.add("cases__controls-"+t),r.querySelector(".cases__control-prev").classList.add("prev-"+t),r.querySelector(".cases__control-next").classList.add("next-"+t),b[t]=new Swiper(".instance-"+t,{observer:!0,observeParents:!0,navigation:{prevEl:".prev-"+t,nextEl:".next-"+t}})}),b[2].update(),setTimeout(function(){var e=!0,t=!1,r=void 0;try{for(var n,i=b[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){n.value.update()}}catch(e){t=!0,r=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw r}}},50)}document.querySelectorAll('input[type="tel"]').forEach(function(e){new Inputmask("+7 (999) 999-99-99").mask(e)});var x=document.querySelector(".reviews");window.addEventListener("scroll",e,!1),window.addEventListener("resize",e,!1);var P=new Swiper(".slider-block",{});document.querySelectorAll(".slider-nav__item").forEach(function(r,e){r.setAttribute("data-index",e),r.addEventListener("click",function(e){var t=parseInt(e.currentTarget.dataset.index);P.slideTo(t),document.querySelectorAll(".slider-nav__item").forEach(function(e){e.classList.remove("active")}),r.classList.add("active")})});for(var q=document.querySelectorAll(".card-edition__count-input"),A=[],k=0;q.length>k;k++)console.log(q[k].value),A[k]=document.createElement("div"),A[k].className="buffer",q[k].parentNode.insertBefore(A[k],q[k].nextSibling),q[k].oninput=function(){this.nextElementSibling.innerHTML=this.value,this.style.width=this.nextElementSibling.clientWidth+"px"};[].slice.call(document.querySelectorAll(".card-edition__counts")).forEach(function(e){var t=e.querySelector(".card-edition__count-input");e.querySelector(".card-edition__count-minus").onclick=function(){var e=+t.value-1;0<=e&&(t.value=e)},e.querySelector(".card-edition__count-plus").onclick=function(){t.value=+t.value+1}});var B=document.querySelector(".product-related__slider");B&&new Swiper(B,{slidesPerView:2,spaceBetween:6,navigation:{nextEl:".product-related__control-next",prevEl:".product-related__control-prev"},breakpoints:{767:{slidesPerView:3,spaceBetween:27},1024:{slidesPerView:4,spaceBetween:27}}})});