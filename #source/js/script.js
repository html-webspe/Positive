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

const printSliderImg = new Swiper('.slider-img__container', {
   slidesPerView: 1,
   navigation: {
      nextEl: ".slider-img__control-next",
      prevEl: ".slider-img__control-prev",
   },
});
/*==================== <!-- PRINT SWIPE -->  ====================*/


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
                  successModal.style.display = "block";
               }
            }
         }

         xhr.open('POST', 'mail.php', true);
         xhr.send(formData);

         form.reset();
      }
   });
}



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

//====================   <!-- FORMS -->   ========================//


// generate video url
let generateUrl = function (id) {
   let query = '?rel=0&showinfo=0&autoplay=1';

   return 'https://www.youtube.com/embed/' + id + query;
};

// creating iframe
let createIframe = function (id) {
   let iframe = document.createElement('iframe');

   iframe.setAttribute('allowfullscreen', '');
   iframe.setAttribute('allow', 'autoplay; encrypted-media');
   iframe.setAttribute('src', generateUrl(id));

   return iframe;
};
const videos = document.querySelectorAll('.section-video');


$(videos).each(function (e) {

   let videoCnt = $(this).closest('.section-video').find('.video'),
      videoId = videoCnt.attr('data-video'),
      img = $(this).find('.video-poster'),
      youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg',
      playBtn = $(this).find('.video-btn__play'),
      closeBtn = $(this).find('.video-btn__close'),
      videoOverlay = $(this).find('.section-video__overlay');


   if (img.length > 0) {
      $(img).attr('src', youtubeImgSrc);
   }

   playBtn.click(function () {
      videoCnt.fadeIn();
      videoOverlay.fadeOut();
      closeBtn.css({ 'opacity': '0.7', 'display': 'block' });
      playBtn.fadeOut();
      img.fadeOut();

      let iframe = createIframe(videoId);
      videoCnt.html(iframe);
   })

   closeBtn.click(function () {
      closeBtn.fadeOut();
      playBtn.fadeIn();
      img.fadeIn();
      videoOverlay.fadeIn();
      videoCnt.fadeOut();
      videoCnt.html(' ');

   });
});
//====================  <!-- Video -->  ========================//