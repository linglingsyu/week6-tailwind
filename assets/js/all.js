"use strict";

$(document).ready(function () {
  $("#menu-toggle").on("click", function () {
    $("#mobile-menu").slideToggle();
  });
});
"use strict";

// // import Swiper bundle with all modules installed
//  import Swiper from 'swiper/bundle';
//  // import styles bundle
//  import '../style/swiper.css';
var swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: false,
  autoplay: {
    delay: 3000
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
//# sourceMappingURL=all.js.map
