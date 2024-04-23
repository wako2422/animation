"use strict";

// ↓ハンバーガーメニュー・著作権の色変え(今回は関係ない)
jQuery(function () {
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
});
// ↑ハンバーガーメニュー・著作権の色変え(今回は関係ない)

// トップスクロールボタン機能実装(JS)
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq__panel").forEach(function (panel) {
    panel.addEventListener("click", function () {
      let isExpanded = this.getAttribute("aria-expanded") === "false";
      this.setAttribute("aria-expanded", isExpanded ? "true" : "false");
      this.querySelector(".faq__header").classList.toggle(
        "is-open",
        isExpanded
      );
      this.querySelector(".faq__main").setAttribute("aria-hidden", !isExpanded);
    });
  });
});
