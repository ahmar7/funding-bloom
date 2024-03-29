// $(document).ready(function () {
//   // Smooth scrolling when clicking on navigation links
//   $('.header-ul li a[href^="#"]').on("click", function (event) {
//     event.preventDefault();
//     console.log("Click event handler triggered.");

//     // Remove nav-active class from all navigation links
//     $(".header-ul li a").removeClass("nav-active");

//     // Add nav-active class to the clicked navigation link
//     $(this).addClass("nav-active");

//     const target = $(this.getAttribute("href"));
//     if (target.length) {
//       $("html, body").stop().animate(
//         {
//           scrollTop: target.offset().top,
//         },
//         1500
//       );
//     }
//   });
// });
$(document).ready(function () {
  // Smooth scrolling when clicking on navigation links
  $('.header-ul li a[href^="#"]').on("click", function (event) {
    event.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      const headerHeight = $(".header").outerHeight();
      const targetOffset = target.offset().top - headerHeight;

      // Calculate the translation based on the target section
      let translation = 0;
      switch ($(this).attr("href")) {
        case "#about":
          translation = -677;
          break;
        case "#service":
          translation = -1346;
          break;
        case "#pricing":
          translation = -2780;
          break;
        default:
          translation = 0;
      }

      // Disable parallax scrolling temporarily
      $(".scroll-content").css({
        transition: "all 0.3s ease-in-out",
        transform: `translate3d(0px, ${translation}px, 0px)`,
      });
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
  // $('.header-ul li a[href^="#"]').on("click", function (event) {
  //   event.preventDefault();
  //   console.log("Click event handler triggered.");

  //   // Remove nav-active class from all navigation links
  //   $(".header-ul li a").removeClass("nav-active");

  //   // Add nav-active class to the clicked navigation link
  //   $(this).addClass("nav-active");

  //   const target = $(this.getAttribute("href"));
  //   if (target.length) {
  //     $("html, body").stop().animate(
  //       {
  //         scrollTop: target.offset().top,
  //       },
  //       1500
  //     );
  //   }
  // });

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
// Check if the device has mouse input capability
function isMouseDevice() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

// Initialize VanillaTilt only if it's a mouse device
if (isMouseDevice()) {
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
}

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
// function toggleAnswer(id) {
//   var answer = document.getElementById("answer" + id);
//   var question = document.querySelector(".question:nth-child(" + id + ")");

//   if (answer.classList.contains("active")) {
//     answer.style.maxHeight = null;
//     answer.classList.remove("active");
//     question.classList.remove("active");
//   } else {
//     answer.style.maxHeight = answer.scrollHeight + "px";
//     answer.classList.add("active");
//     question.classList.add("active");
//   }
// }

function toggleAnswer(question) {
  var answer = question.nextElementSibling;
  var icon = question.querySelector("img");

  if (answer.classList.contains("active")) {
    answer.style.maxHeight = null;
    answer.classList.remove("active");
    icon.style.transform = "rotate(0deg)";
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    answer.classList.add("active");
    icon.style.transform = "rotate(45deg)";
  }
}
