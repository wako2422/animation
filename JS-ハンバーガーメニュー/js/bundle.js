"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニュー(JS)
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
});
