"use strict";

jQuery(function () {
  // ハンバーガーメニュー(jQuery)
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
});
