const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
   initRatings();
}
function initRatings() {
   let ratingActive, ratingValue;

   for (let index = 0; index < ratings.length; index++) {
      const rating = ratings[index];
      initRating(rating);
   }
   function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidht();

      if (rating.classList.contains('rating__set')) {
         setRating(rating);
      }
   }

   function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__value');
   }

   function setRatingActiveWidht(index = ratingValue.innerHTML) {
      const ratingActiveWidht = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidht}%`;
   }


   function setRating(rating) {
      const ratingItems = rating.querySelectorAll('.rating__item');

      for (let index = 0; index < ratingItems.length; index++) {
         const ratingItem = ratingItems[index];

         ratingItem.addEventListener('mouseenter', function (e) {
            initRatingVars(rating);
            setRatingActiveWidht(ratingItem.value);
         })
         ratingItem.addEventListener('mouseleave', function (e) {
            setRatingActiveWidht();
         })
         ratingItem.addEventListener('click', function (e) {
            initRatingVars(rating);

            if (rating.dataset.ajax) {
               setRatingValue(ratingItem.value, rating);
            } else {
               ratingValue.innerHTML = index + 1;
               setRatingActiveWidht();
            }
         })
      }
   }
}
