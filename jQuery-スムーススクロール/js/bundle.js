"use strict";

jQuery(function () {
  // ↓スキルカードのアニメーショントリガー(今回は関係ない)
  jQuery(window).on("scroll", function () {
    var height = jQuery(window).scrollTop();
    var top1 = jQuery("#trigger1").offset().top;
    top1 -= 150;
    if (height > top1) {
      jQuery(".grid").addClass("op");
    }
    // ↑スキルカードのアニメーショントリガー(今回は関係ない)
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

  // // ハンバーガーメニュー(jQuery)
  jQuery("#humburger").on("click", function () {
    if (jQuery(this).attr("aria-expanded") === "false") {
      jQuery("body").addClass("is-active");
      jQuery("#spMenu").fadeToggle();
      jQuery(this).attr("aria-expanded", true);
      jQuery(this).attr("aria-label", "メニューを閉じる");
      jQuery("#spMenu").attr("aria-hidden", false);
      jQuery("#spMenuBg").fadeIn();
    } else {
      jQuery("body").removeClass("is-active");
      jQuery("#spMenu").fadeToggle();
      jQuery(this).attr("aria-expanded", false);
      jQuery(this).attr("aria-label", "メニューを開く");
      jQuery("#spMenu").attr("aria-hidden", true);
      jQuery("#spMenuBg").fadeOut();
    }
  });
  jQuery("#spMenuBg").on("click", function () {
    jQuery("body").removeClass("is-active");
    jQuery("#spMenu").fadeToggle();
    jQuery("#humburger").attr("aria-expanded", false);
    jQuery("#humburger").attr("aria-label", "メニューを開く");
    jQuery("#spMenu").attr("aria-hidden", true);
    jQuery("#spMenuBg").fadeOut();
  });

  // ページ内スムーススクロール(jQuery)
  jQuery('a[href^="#"]').click(function () {
    // ↓メニュークリックした時にハンバーガーメニューを解除
    jQuery("body").removeClass("is-active");
    jQuery("#spMenu").fadeToggle();
    jQuery("#humburger").attr("aria-expanded", false);
    jQuery("#humburger").attr("aria-label", "メニューを開く");
    jQuery("#spMenu").attr("aria-hidden", true);
    jQuery("#spMenuBg").fadeOut();
    // ↑メニュークリックした時にハンバーガーメニューを解除

    var adjust = 50;
    var speed = 600;
    var href = jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    jQuery("html,body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  // ページ外スムーススクロール(jQuery)
  // 今回別ページを用意してないのでコードの記載だけになります
  var urlHash = location.hash;
  if (urlHash) {
    jQuery("html,body").stop().scrollTop(0);
    setTimeout(function () {
      var headerHeight = 150;
      var target = jQuery(urlHash);
      var position = target.offset().top - headerHeight;
      jQuery("html,body").stop().animate(
        {
          scrollTop: position,
        },
        600
      );
    }, 100);
  }
});

// ↓スワイパー(カード)(今回は関係ない)
document.addEventListener("DOMContentLoaded", function () {
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
// ↑スワイパー(カード)(今回は関係ない)
