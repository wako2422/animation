"use strict";

// ↓スキルカードのアニメーショントリガー(今回は関係ない)
jQuery(function () {
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
});

document.addEventListener("DOMContentLoaded", function () {
  // ↓ハンバーガーメニュー(今回は関係ない)
  document.getElementById("humburger").addEventListener("click", function () {
    const body = document.body;
    const humburger = document.getElementById("humburger");
    const spMenu = document.getElementById("spMenu");
    const spMenuBg = document.getElementById("spMenuBg");
    const isActive = humburger.getAttribute("aria-expanded") === "false";
    body.classList.toggle("is-active", isActive);
    spMenu.classList.toggle("is-active", isActive);
    humburger.setAttribute("aria-expanded", isActive);
    humburger.setAttribute(
      "aria-label",
      isActive ? "メニューを閉じる" : "メニューを開く"
    );
    spMenu.setAttribute("aria-hidden", !isActive);
    spMenuBg.classList.toggle("is-active", isActive);
  });

  document.getElementById("spMenuBg").addEventListener("click", function () {
    const body = document.body;
    const humburger = document.getElementById("humburger");
    const spMenu = document.getElementById("spMenu");
    const spMenuBg = document.getElementById("spMenuBg");
    body.classList.remove("is-active");
    spMenu.classList.remove("is-active");
    humburger.setAttribute("aria-expanded", false);
    humburger.setAttribute("aria-label", "メニューを開く");
    spMenu.setAttribute("aria-hidden", true);
    spMenuBg.classList.remove("is-active");
  });
  // ↑ハンバーガーメニュー(今回は関係ない)

  // ページ内スムーススクロール(JS)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      // ↓メニュークリックした時にハンバーガーメニューを解除
      const body = document.body;
      const humburger = document.getElementById("humburger");
      const spMenu = document.getElementById("spMenu");
      const spMenuBg = document.getElementById("spMenuBg");
      body.classList.remove("is-active");
      spMenu.classList.remove("is-active");
      humburger.setAttribute("aria-expanded", false);
      humburger.setAttribute("aria-label", "メニューを開く");
      spMenu.setAttribute("aria-hidden", true);
      spMenuBg.classList.remove("is-active");
      // ↑メニュークリックした時にハンバーガーメニューを解除

      const adjust = 50;
      let href = this.getAttribute("href");
      let target = document.querySelector(
        href === "#" || href === "" ? "html" : href
      );
      var position = target.offsetTop + adjust;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    });
  });

  // ページ外スムーススクロール(JS)
  // 今回別ページを用意してないのでコードの記載だけになります
  var urlHash = location.hash;
  if (urlHash) {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setTimeout(function () {
      var headerHeight = 150;
      var target = document.querySelector(urlHash);
      var position = target.offsetTop - headerHeight;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }, 100);
  }

  // ↓スワイパー(カード)(今回は関係ない)
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
  // ↑スワイパー(カード)(今回は関係ない)
});
