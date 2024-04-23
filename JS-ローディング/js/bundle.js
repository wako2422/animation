"use strict";

window.addEventListener("load", function () {
  // ローディング(JS)
  setTimeout(function () {
    var loadingBg = document.getElementById("loading");
    loadingBg.classList.add("fadeout");
    setTimeout(function () {
      loadingBg.style.display = "none";
    }, 1000); // アニメーションの時間と合わせる
  }, 1500);
});
