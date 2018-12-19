document.addEventListener("DOMContentLoaded", function() {
  var nav = document.querySelectorAll(".nav-main")[0];

  if (nav !== undefined) {
    // Mobile nav icon
    var navIcon = nav.querySelector(".nav-icon");
    var list = nav.querySelector(".nav-list");

    if (navIcon) {
      navIcon.addEventListener("click", function() {
        nav.classList.toggle("open");
        document.body.classList.toggle("no-scroll");
        list.scrollTop = 0;
        document.querySelector("html").classList.toggle("no-scroll");
      });
    }

    // Submenu
    var subs = document.querySelectorAll(".with-sub");
    for (i = 0, len = subs.length; i < len; i++) {
      sub = subs[i];
      sub.addEventListener("click", function(event) {
        var target;
        target = event.currentTarget.querySelector(".sub");
        target.classList.toggle("active");
      });
    }
  }
});

/*
     FILE ARCHIVED ON 17:52:37 Aug 26, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:04:40 Dec 06, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 441.404 (3)
  esindex: 0.012
  captures_list: 522.511
  CDXLines.iter: 58.977 (3)
  PetaboxLoader3.datanode: 538.466 (5)
  exclusion.robots: 0.29
  exclusion.robots.policy: 0.272
  RedisCDXSource: 8.061
  PetaboxLoader3.resolve: 352.458 (2)
  load_resource: 594.82
*/