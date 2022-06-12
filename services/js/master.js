$(function () {
  // menu-bar*******************************
  $(".ham-icon-menu").click(function () {
    $(".menu-mobile").addClass("active-menu-mobile");
    $(".beforemain").css("width", "100%");
  });
  $(".beforemain").click(function () {
    $(".menu-mobile").removeClass("active-menu-mobile");
    $(".beforemain").css("width", "0");
  });
  // open search box**************************
  $(".open-search").click(function () {
    $(".search-input").css("display", "block");
  });
  // close search box***************************
  $(".close-search").click(function () {
    $(".search-input").css("display", "none");
  });

  // service slider
  $(".owl-carousel").owlCarousel({
    dots: false,
    margin: 15,
    responsiveClass: true,
    loop: true,
    autoWidth: true,
    items: 5,
    rtl: true,
  });

  $(".item").click(function () {
    $(".banner").slideUp();
    $(".nav-top").slideUp();
    $(".des").css("display", "none");
    $(".item").css("minHeight", "70px");
    $(".service-slider").css("border", "2px solid #6c757d30");
    $(".header").css("position", "fixed");
    $(".khadamat").css("marginTop", "270px");
    $(".service-slider").css("position", "fixed");
  });
});
// close menu bar ****************
function closeMenuBar() {
  $(".menu-mobile").removeClass("active-menu-mobile");
  $(".beforemain").css("width", "0");
}

// countDown****************
const countdown = document.querySelector(".countdown");
const dayDisp = document.getElementById("day");
const hourDisp = document.getElementById("hour");
const minuteDisp = document.getElementById("minute");
const secondDisp = document.getElementById("second");
let countDownEnd = 1658172599000;
let interval = setInterval(() => {
  let now = new Date().getTime();
  let timeDifference = countDownEnd - now;
  let dayLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hourLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minuteLeft = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  let secondLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  dayLeft < 10
    ? (dayDisp.innerHTML = "0" + dayLeft)
    : (dayDisp.innerHTML = dayLeft);

  hourLeft < 10
    ? (hourDisp.innerHTML = "0" + hourLeft)
    : (hourDisp.innerHTML = hourLeft);

  minuteLeft < 10
    ? (minuteDisp.innerHTML = "0" + minuteLeft)
    : (minuteDisp.innerHTML = minuteLeft);

  secondLeft < 10
    ? (secondDisp.innerHTML = "0" + secondLeft)
    : (secondDisp.innerHTML = secondLeft);

  if (timeDifference < 0) {
    clearInterval(interval);
    countdown.innerHTML = "end";
  }
}, 1000);

// service details
const navLinks = document.querySelectorAll(".item");
const sections = document.querySelectorAll(".service-detail-item");
navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    const topMargin = sections[idx].offsetTop;
    window.scrollTo({ top: topMargin - 270, behavior: "smooth" });
  });
});

// go to top
const body = document.getElementsByClassName("body")[0];

body.addEventListener("scroll", function () {
  let top = body.scrollTop;
  // ****
  if (top > body.clientHeight + 500) {
    document.getElementById("gototop").style.display = "flex";
  } else {
    document.getElementById("gototop").style.display = "none";
  }
});
document.getElementById("gototop").addEventListener("click", function () {
  body.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
