"use strict";

jQuery(function () {
  // ↓ハンバーガーメニュー・著作権の色変え(今回は関係ない)
  jQuery(window).on("scroll", function () {
    var height = jQuery(window).scrollTop();
    var top1 = jQuery("#trigger1").offset().top;
    top1 -= 150;
    // ↓スキルカードのアニメーショントリガー(今回は関係ない)
    if (height > top1) {
      jQuery(".grid").addClass("op");
    }
    // ↑スキルカードのアニメーショントリガー(今回は関係ない)
    top1 -= 250;
    var top3 = jQuery("#trigger3").offset().top;
    top3 -= 150;
    if (height > top1 && height < top3) {
      jQuery("body").addClass("is-white");
    } else {
      jQuery("body").removeClass("is-white");
    }
  });
  // ↑ハンバーガーメニュー・著作権の色変え(今回は関係ない)

  // スワイパー(カード、jQuery)
  const cardSwiper = new Swiper(".swiper-card", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    direction: "horizontal",
    speed: 800,
    pagination: {
      el: ".swiper-pagination-card",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-card",
      prevEl: ".swiper-button-prev-card",
    },
  });
});
