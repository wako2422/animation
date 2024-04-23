"use strict";

// スワイパー(背景、jQuery)
jQuery(function () {
  const mvSwiper = new Swiper(".swiper-mv", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2500,
    allowTouchMove: false,
  });
});

