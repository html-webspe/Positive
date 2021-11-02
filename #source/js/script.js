/*==================== SHOW MENU ====================*/
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



const swiper = new Swiper('.print__container', {
   slidesPerView: 1,
   navigation: {
      nextEl: ".print__control-next",
      prevEl: ".print__control-prev",
   },
   pagination: {
      el: ".print__pagination",
      type: 'custom',
      renderCustom: function (swiper, current, total) {
         return ('0' + current).slice(-2) + ' / ' + ('0' + total).slice(-2);
      }
   },
});




if ($('.swiper-container').length > 0) { //some-slider-wrap-in
   let swiperInstances = [];
   $(".swiper-container").each(function (index, element) { //some-slider-wrap-in
      const $this = $(this);
      $this.addClass("instance-" + index); //instance need to be unique (ex: some-slider)
      $this.parent().find(".cases__controls").addClass("cases__controls-" + index);
      $this.parent().find(".cases__control-prev").addClass("prev-" + index); //prev must be unique (ex: some-slider-prev)
      $this.parent().find(".cases__control-next").addClass("next-" + index); //next must be unique (ex: some-slider-next)
      swiperInstances[index] = new Swiper(".instance-" + index, { //instance need to be unique (ex: some-slider)
         observer: true,
         observeParents: true,
         navigation: {
            prevEl: ".prev-" + index,  //prev must be unique (ex: some-slider-prev)
            nextEl: ".next-" + index, //next must be unique (ex: some-slider-next)
         },
      });
   });

   // Now you can call the update on a specific instance in the "swiperInstances" object
   // e.g.
   swiperInstances[3].update();
   //or all of them
   setTimeout(function () {
      for (const slider of swiperInstances) {
         slider.update();
      }
   }, 50);
}



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