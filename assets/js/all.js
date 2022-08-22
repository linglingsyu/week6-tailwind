"use strict";

$(document).ready(function () {
  $("#menu-toggle").on("click", function () {
    $("#mobile-menu").slideToggle();
  });
});
"use strict";

var _swiper = _interopRequireDefault(require("swiper"));

require("swiper/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var swiper = new _swiper["default"]('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
//# sourceMappingURL=all.js.map
