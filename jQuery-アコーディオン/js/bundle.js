"use strict";

jQuery(function () {
  // ↓ハンバーガーメニュー・著作権の色変え(今回は関係ない)
  jQuery(window).on("scroll", function () {
    var height = jQuery(window).scrollTop();
    var top1 = jQuery("#trigger1").offset().top;
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

  // アコーディオン(jQuery)
  jQuery(".faq__panel").on("click", function () {
    if (jQuery(this).attr("aria-expanded") === "false") {
      jQuery(this).attr("aria-expanded", true);
      jQuery(this).find(".faq__header").addClass("is-open");
      jQuery(this).find(".faq__main").slideDown();
      jQuery(this).find(".faq__main").attr("aria-hidden", false);
    } else {
      jQuery(this).attr("aria-expanded", false);
      jQuery(this).find(".faq__header").removeClass("is-open");
      jQuery(this).find(".faq__main").slideUp();
      jQuery(this).find(".faq__main").attr("aria-hidden", true);
    }
  });
});
