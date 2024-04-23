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
  // ↓ページトップボタン出現(今回は関係ない)
  window.addEventListener("scroll", function () {
    let height = window.scrollY;
    let trigger1 = document.getElementById("trigger1");
    let top1 = trigger1.offsetTop - 150;
    let scrollBtn = document.getElementById("scrollBtn");
    let gridElements = document.querySelectorAll(".grid");
    if (height > top1) {
      scrollBtn.classList.add("is-active");
      gridElements.forEach(function (element) {
        element.classList.add("op");
      });
    } else {
      scrollBtn.classList.remove("is-active");
    }
  });
  // ↑ページトップボタン出現(今回は関係ない)

  // ページトップ(JS)
  const btn = document.getElementById("scrollBtn");
  btn.addEventListener("click", function () {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  // ↓スワイパー(今回は関係ない)
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
  // ↑スワイパー(今回は関係ない)
});
