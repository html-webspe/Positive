//====================  <!-- Fixed -->========================//
const topOffset = document.querySelector('.wrapper');

const positionFixed = (element, poinst) => {
   window.addEventListener('scroll', () => {
      let scrollDistens = window.scrollY;

      const headerHeight = document.getElementById(element).offsetHeight,
         scrollPos = poinst,
         elements = document.getElementById(element);

      if (scrollDistens >= scrollPos) {
         elements.classList.add('sticky');
         topOffset.style.paddingTop = `${headerHeight}px`;
      } else {
         elements.classList.remove('sticky');
         topOffset.style.paddingTop = null;
      }
   });
}
positionFixed('header-sticky', 1);
//====================  <!-- Header-Fixed -->========================//

/*==================== <-- SHOW MENU -->  ====================*/
const showMenu = (toggleId, navId) => {
   const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)

   if (toggle && nav) {
      toggle.addEventListener('click', () => {
         nav.classList.toggle('show-menu');
         toggle.classList.toggle('active');

      })
   }
}
showMenu('nav-toggle', 'nav-menu');
/*==================== <!-- SHOW MENU --> ====================*/
//==================== <!-- ImageBg --> ========================//
function ibg() {
   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}
ibg();
//====================  <!-- ImageBg -->  ========================//

/*==================== <-- PRINT SWIPE --> ====================*/
const printSlider = new Swiper('.slider-print__container', {
   slidesPerView: 1,
   allowTouchMove: false,
   speed: 1000,
   navigation: {
      nextEl: ".slider-print__control-next",
      prevEl: ".slider-print__control-prev",
   },
   pagination: {
      el: ".print__pagination",
      type: 'custom',
      renderCustom: function (swiper, current, total) {
         return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
      }
   },
   parallax: true
});



const printSliderImg = document.querySelectorAll('.print-img__container'),
   printSliderImgItem = document.querySelectorAll('.print-img__item'),
   printSliderImgWrapper = document.querySelectorAll('.print-img__wrapper');

if (printSliderImg.length > 0) {

   printSliderImgWrapper.forEach((el) => {
      el.classList.add('swiper-wrapper');
   })
   printSliderImgItem.forEach((el) => {
      el.classList.add('swiper-slide');
   })

   printSliderImg.forEach((el) => {

      el.classList.add('swiper-container');

      new Swiper(el, {
         slidesPerView: 1,
         navigation: {
            nextEl: el.closest('.print__slider-img').querySelector(".print-img__control-next"),
            prevEl: el.closest('.print__slider-img').querySelector(".print-img__control-prev"),
         },
      });
   })
}



/*==================== <!-- PRINT SWIPE -->  ====================*/

const productSlider = document.querySelector('.product__slider')

if (productSlider) {
   new Swiper(productSlider, {
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      navigation: {
         nextEl: ".product__control-next",
         prevEl: ".product__control-prev",
      },
      breakpoints: {
         767: {
            slidesPerView: 3,
            slidesPerColumn: 2,
         },
         1024: {
            slidesPerView: 4,
            slidesPerColumn: 2,
         },
      },
   });
}


/*==================== <-- REMOVE MENU MOBILE --> ====================*/
const navLink = document.querySelectorAll('.menu__link')

function linkAction() {
   const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

   Goto();

   navMenu.classList.remove('show-menu');
   navToggle.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== <!-- REMOVE MENU MOBILE --> ====================*/



//====================  <!-- GoTO -->  ========================//

function Goto() {
   const links = document.querySelectorAll('.scroll-to');

   for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (e) => {
         e.preventDefault();

         const blockId = e.target.getAttribute('href').substring(1);

         document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      });
   }
}
//====================  <!-- GoTO -->  ========================//

//====================   <-- TABS -->   ========================//
const tabsBtn = document.querySelectorAll('.cases__navigation-item'),
   tabsItem = document.querySelectorAll('.cases__item');

tabsBtn.forEach((item) => {

   item.addEventListener("click", () => {
      let currentBtn = item,
         tabId = currentBtn.getAttribute('data-tab'),
         currentTab = document.querySelector(tabId);

      tabsBtn.forEach((item) => {
         item.classList.remove('active');
      })
      tabsItem.forEach((item) => {
         item.classList.remove('active');
      })

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
   })
})
//====================   <!-- TABS -->   ========================//


//====================   <-- CASES-SLIDER -->   ========================//
const swiperItem = document.querySelectorAll('.cases__slider-body');

if (swiperItem.length > 0) {

   let swiperInstances = [];

   swiperItem.forEach((element, index) => {

      element.classList.add("instance-" + index);

      let parent = element.closest('.cases__block');

      parent.querySelector(".cases__controls").classList.add("cases__controls-" + index);
      parent.querySelector(".cases__control-prev").classList.add("prev-" + index);
      parent.querySelector(".cases__control-next").classList.add("next-" + index);


      swiperInstances[index] = new Swiper(".instance-" + index, {
         observer: true,
         observeParents: true,
         navigation: {
            prevEl: ".prev-" + index,
            nextEl: ".next-" + index,
         },
      });
   });

   swiperInstances[2].update();

   setTimeout(function () {
      for (const slider of swiperInstances) {
         slider.update();
      }
   }, 50);
}
//====================   <!-- CASES-SLIDER -->   ========================//


//====================   <-- FORMS -->   ========================//
let selector = document.querySelectorAll('input[type="tel"]');


selector.forEach(el => {
   let im = new Inputmask('+7 (999) 999-99-99');
   im.mask(el);
});



let validateForms = function (selector, rules, successModal, yaGoal) {
   new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function (form) {
         let formData = new FormData(form);

         let xhr = new XMLHttpRequest();

         xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
               if (xhr.status === 200) {
                  const modal = document.querySelector('.modal'),
                     modalContainer = document.querySelectorAll('.modal__body'),
                     body = document.querySelector('body'),
                     modalThanks = document.querySelector(successModal);

                  modalContainer.forEach(element => {
                     element.classList.remove('modal-open');
                     element.classList.remove('fadeInUp');
                     element.classList.remove('animate-open');
                  });

                  modal.classList.add('is-open');
                  modalThanks.classList.add('modal-open');

                  setTimeout(() => {
                     modal.classList.remove('is-open');
                     modalThanks.classList.remove('modal-open');

                     let pagePosition = parseInt(document.body.dataset.position, 10);
                     document.body.style.top = 'auto';
                     document.body.style.paddingRight = '0';
                     document.body.classList.remove('disable-scroll');
                     window.scroll({ top: pagePosition, left: 0 });
                     document.body.removeAttribute('data-position');

                  }, 2000);
               }
            }
         }

         xhr.open('POST', 'mail.php', true);
         xhr.send(formData);

         form.reset();
      }
   });
}

/*

validateForms('#form-callback',
   {
      email: { required: true, email: true },
      tel: { required: true },
      name: { required: true },

   },
   '.thanks-popup'
);
validateForms('#modal-form',
   {
      email: { required: true, email: true },
      tel: { required: true },
      name: { required: true },

   },
   '.thanks-popup'
);
*/
//====================   <!-- FORMS -->   ========================//



const section = document.querySelector(".reviews");
function checkScroll() {

   if (section) {
      let scrollTop = window.scrollY,
         sectionHeight = section.offsetHeight,
         sectionTop = section.offsetTop,
         sectionBottom = sectionTop + sectionHeight;

      if (scrollTop > sectionBottom) {
         $('.video').html(' ');
         $('.video').fadeOut();

         $('.video-poster').fadeIn();
         $('.video-btn__play').fadeIn();
      }
   }
}

window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);





let cardSlider = new Swiper('.slider-block', {
});
const sliderNavItem = document.querySelectorAll('.slider-nav__item');

sliderNavItem.forEach((el, index) => {
   el.setAttribute('data-index', index);

   el.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      cardSlider.slideTo(index);

      document.querySelectorAll('.slider-nav__item').forEach((e) => {
         e.classList.remove('active');
      })
      el.classList.add('active');
   });
})

/* Input Width */

const input = document.querySelectorAll('.card-edition__count-input'),
   buffer = [];
for (var i = 0; input.length > i; i++) {
   console.log(input[i].value);
   buffer[i] = document.createElement('div');
   buffer[i].className = "buffer";
   //вставляем скрытый div.buffer
   input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

   input[i].oninput = function () {
      this.nextElementSibling.innerHTML = this.value;
      this.style.width = this.nextElementSibling.clientWidth + 'px';
   };
}
/* Input Width */



//====================  Product-count ========================//
const counters = [].slice.call(document.querySelectorAll('.card-edition__counts'));

counters.forEach(function (counter) {
   var input = counter.querySelector('.card-edition__count-input');

   counter.querySelector('.card-edition__count-minus').onclick = function () {
      var newValue = +input.value - 1;

      if (newValue >= 0) {
         input.value = newValue;
      }
   };

   counter.querySelector('.card-edition__count-plus').onclick = function () {
      input.value = +input.value + 1;
   };
});
//====================  /Product-count ========================//


const productRelated = document.querySelector('.product-related__slider')

if (productRelated) {
   new Swiper(productRelated, {
      slidesPerView: 2,
      spaceBetween: 6,

      navigation: {
         nextEl: ".product-related__control-next",
         prevEl: ".product-related__control-prev",
      },
      breakpoints: {
         767: {
            slidesPerView: 3,
            spaceBetween: 27,
         },
         1024: {
            slidesPerView: 4,
            spaceBetween: 27,
         },
      },
   });
}
