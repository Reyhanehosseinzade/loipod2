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
  //banner slider*************************
  $(".banner-slider").slick({
    rtl:true,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    arrows: false,
  });
  //service-details open-close in mobile**********************
  const detailSection = document.querySelector(".service-mobile-details");
  const serviceItemMobile = document.querySelectorAll(".service-item-m");
  const popUpMobile = document.querySelectorAll(".pop-up-mobile");
  const closeBtns = document.querySelectorAll(".close-detail");
  serviceItemMobile.forEach((item, idx) => {
    item.onclick = () => {
      popUpMobile.forEach((popUp) => {
        popUp.style.display = "none";
        popUp.style.transform = "translateY(100%)";
        detailSection.style.height = "100vh";
      });
      popUpMobile[idx].style.display = "flex";
      setTimeout(() => {
        popUpMobile[idx].style.transform = "translateY(0)";
      }, 100);
    };
  });
  popUpMobile.forEach((item) => {
    item.onclick = function () {
      detailSection.style.height = "0";
      item.style.transform = "translateY(100%)";
    };
  });
  closeBtns.forEach((btn, idx) => {
    btn.onclick = () => {
      popUpMobile[idx].style.transform = "translateY(100%)";
      detailSection.style.height = "0";
      setTimeout(() => {
        popUpMobile[idx].style.display = "none";
      }, 100);
    };
  });

  // hamkaran slider*****************
  $(".hamkar-slider").slick({
    rtl:true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  });
  //podcast slider********************
  $(".cast-slider").attr("dir", "ltr");
  $(".cast-slider").slick({
    slidesToShow: 2,
    centerMode: true,
    infinite: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".news-slider").attr("dir", "ltr");
  $(".news-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // footer link*******************
  $(".toggle-icon1").click(function () {
    $(".peyvandha-links").slideToggle();
  });
  $(".toggle-icon2").click(function () {
    $(".questions-1-links").slideToggle();
  });
  $(".toggle-icon3").click(function () {
    $(".questions-2-links").slideToggle();
  });
});
// close menu bar ****************
function closeMenuBar() {
  $(".menu-mobile").removeClass("active-menu-mobile");
  $(".beforemain").css("width", "0");
}

// box services ***************
const minibox1 = document.getElementById("mini-box1");
const minibox2 = document.getElementById("mini-box2");
const minibox3 = document.getElementById("mini-box3");
const minibox4 = document.getElementById("mini-box4");

const mini_child1 = minibox1.children;
const mini_child2 = minibox2.children;
const mini_child3 = minibox3.children;
const mini_child4 = minibox4.children;

const matn1 = document.getElementById("matn1");
const matn2 = document.getElementById("matn2");
const matn3 = document.getElementById("matn3");
const matn4 = document.getElementById("matn4");

const matn_child1 = matn1.children;
const matn_child2 = matn2.children;
const matn_child3 = matn3.children;
const matn_child4 = matn4.children;

let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;

const toggle1 = (element) => {
  if (flag1) {
    minibox1.style.height = "0";
    matn1.style.height = "0";
    flag1 = false;
  } else {
    minibox1.style.height = "50px";
    matn1.style.height = "170px";
    flag1 = true;
    for (let i = 0; i < 4; i++) {
      mini_child1[i].style.visibility = "hidden";
      matn_child1[i].style.visibility = "hidden";
      mini_child1[element].style.visibility = "visible";
      matn_child1[element].style.visibility = "visible";
    }
  }
};
const toggle2 = (element) => {
  if (flag2) {
    minibox2.style.height = "0";
    matn2.style.height = "0";
    flag2 = false;
  } else {
    minibox2.style.height = "50px";
    matn2.style.height = "170px";
    flag2 = true;
    for (let i = 0; i < 4; i++) {
      mini_child2[i].style.visibility = "hidden";
      matn_child2[i].style.visibility = "hidden";
      mini_child2[element].style.visibility = "visible";
      matn_child2[element].style.visibility = "visible";
    }
  }
};
const toggle3 = (element) => {
  if (flag3) {
    minibox3.style.height = "0";
    matn3.style.height = "0";
    flag3 = false;
  } else {
    minibox3.style.height = "50px";
    matn3.style.height = "170px";
    flag3 = true;
    for (let i = 0; i < 4; i++) {
      mini_child3[i].style.visibility = "hidden";
      matn_child3[i].style.visibility = "hidden";
      mini_child3[element].style.visibility = "visible";
      matn_child3[element].style.visibility = "visible";
    }
  }
};
const toggle4 = (element) => {
  if (flag4) {
    minibox4.style.height = "0";
    matn4.style.height = "0";
    flag4 = false;
  } else {
    minibox4.style.height = "50px";
    matn4.style.height = "170px";
    flag4 = true;
    for (let i = 0; i < 4; i++) {
      mini_child4[i].style.visibility = "hidden";
      matn_child4[i].style.visibility = "hidden";
      mini_child4[element].style.visibility = "visible";
      matn_child4[element].style.visibility = "visible";
    }
  }
};
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
