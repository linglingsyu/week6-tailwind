$(document).ready(() => {
  $("#menu-toggle").on("click", function () {
    $("#mobile-menu").slideToggle();
  });
});

// // import Swiper bundle with all modules installed
//  import Swiper from 'swiper/bundle';

//  // import styles bundle
//  import '../style/swiper.css';

const swiper = new Swiper(".mySwiper2", {
  // Optional parameters
  // direction: 'vertical',
  autoplay: {
    delay: 3000,
  },
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const Myswiper = new Swiper(".mySwiper", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,
  // freeMode: true,
  autoplay: {
    delay: 3000,
  },
});
