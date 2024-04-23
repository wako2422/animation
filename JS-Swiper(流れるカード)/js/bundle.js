"use strict";

// ↓ハンバーガーメニュー・著作権の色変え(今回は関係ない)
jQuery(function () {
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
});
// ↑ハンバーガーメニュー・著作権の色変え(今回は関係ない)

document.addEventListener("DOMContentLoaded", function () {
  // スワイパー(流れるカード、JS)
  const worksSwiper1 = new Swiper(".swiper-works1", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    direction: "horizontal",
    speed: 6000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true, // 逆方向有効化
    },
  });

  const worksSwiper2 = new Swiper(".swiper-works2", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    direction: "horizontal",
    speed: 8000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
});
