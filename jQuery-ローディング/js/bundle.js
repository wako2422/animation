"use strict";

jQuery(function () {
  // ローディング(jQuery)
  jQuery(window).on("load", function () {
    jQuery("#loading").delay(1500).fadeOut("slow");
  });
});