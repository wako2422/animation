"use strict";

jQuery(function () {
  // トップスクロールボタン出現(jQuery)
  jQuery(window).on("scroll", function () {
    var height = jQuery(window).scrollTop();
    var top1 = jQuery("#trigger1").offset().top;
    top1 -= 150;
    if (height > top1) {
      // ↓ページトップボタン出現(今回は関係ない)
      jQuery("#scrollBtn").fadeIn();
      jQuery(".grid").addClass("op");
    } else {
      jQuery("#scrollBtn").fadeOut();
    }
    // ↑ページトップボタン出現(今回は関係ない)
    // ↓ハンバーガーメニュー・著作権の色変え(今回は関係ない)
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

  // ページトップ(jQuery)
  jQuery("#scrollBtn").on("click", function () {
    jQuery("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

// ↓スワイパー(今回は関係ない)
document.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    direction: "horizontal",
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
  });
});
// ↑スワイパー(今回は関係ない)
