jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 705) {
       $("#ieducar").css("color", "rgb(74, 22, 196)");
      } else {
        $("#ieducar").css("color", "aliceblue");
      }
    });
  });