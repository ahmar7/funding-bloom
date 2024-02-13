$(document).ready(function () {
  // Smooth scrolling when clicking on navigation links
  $('.header-ul li a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    console.log("Click event handler triggered.");

    // Remove nav-active class from all navigation links
    $(".header-ul li a").removeClass("nav-active");

    // Add nav-active class to the clicked navigation link
    $(this).addClass("nav-active");

    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1500
      );
    }
  });
});

VanillaTilt.init(document.querySelector(".my-img"), {
  scale: 1.1, // Adjust the scale as needed
  glare: true, // Add glare effect
  "max-glare": 0.5, // Adjust glare intensity
});
$(document).ready(function () {
  // Smooth scrolling when clicking on navigation links
  $('.header-ul li a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    console.log("Click event handler triggered.");

    // Remove nav-active class from all navigation links
    $(".header-ul li a").removeClass("nav-active");

    // Add nav-active class to the clicked navigation link
    $(this).addClass("nav-active");

    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1500
      );
    }
  });

  // Parallax effect for banner image
  let lastScrollTop = 0;
  $(window).scroll(function () {
    const st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // scrolling down
      $("#banner-img").css("transform", "translateY(50%)");
    } else {
      // scrolling up
      $("#banner-img").css("transform", "translateY(0%)");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });
});
VanillaTilt.init(document.querySelectorAll(".leaf"), {
  glare: true, // Add glare effect
  "max-glare": 0.5, // Adjust glare intensity between 0 and 1
});
VanillaTilt.init(document.querySelectorAll(".my-img"), {
  max: 10, // Max tilt rotation angle
  speed: 400, // Tilt speed
  glare: true, // Add glare effect
  "max-glare": 0.5, // Glare intensity (between 0 and 1)
});

let Scrollbar = window.Scrollbar;
const options = {
  damping: 0.015,
};

Scrollbar.init(document.querySelector("#my-scrollbar"), options);
$(document).ready(function () {
  $(".nav-icon").click(function () {
    $(".header-ul").toggleClass("active-ul");
  });
});
