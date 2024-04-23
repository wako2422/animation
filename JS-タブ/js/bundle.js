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

document.addEventListener("DOMContentLoaded", function () {
  // タブ(JS)
  document.querySelectorAll(".tab__btn-btn").forEach(function (tabButton) {
    tabButton.addEventListener("click", function () {
      const targetID = "#" + this.getAttribute("aria-controls");
      // すべてのタブの状態を初期化
      document.querySelectorAll(".tab__btn-btn").forEach(function (btn) {
        btn.setAttribute("aria-selected", false);
        btn.setAttribute("aria-expanded", false);
      });
      // クリックされたタブの状態を変更
      this.setAttribute("aria-selected", true);
      this.setAttribute("aria-expanded", true);
      // すべてのタブパネルを非表示に
      document.querySelectorAll(".tab__panel").forEach(function (panel) {
        panel.setAttribute("aria-hidden", true);
      });
      // 対象のタブパネルを表示
      document.querySelector(targetID).setAttribute("aria-hidden", false);
    });
  });
});
