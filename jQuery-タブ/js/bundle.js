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

  // タブ(jQuery)
  jQuery(".tab__btn-btn").on("click", function () {
    const targetID = "#" + jQuery(this).attr("aria-controls");
    jQuery(".tab__btn-btn")
      .attr("aria-selected", false)
      .attr("aria-expanded", false);
    jQuery(this).attr("aria-selected", true).attr("aria-expanded", true);
    jQuery(".tab__panel").attr("aria-hidden", true);
    jQuery(targetID).attr("aria-hidden", false);
  });
});
