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
  // cast slider *****************
  $(".cast-slider").slick({
    rtl:true,
    slidesToShow:5,
    slideToScroll:1,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
          centerMode:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:false,
          centerMode:true,
        }
      },
      
    ]
  })
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
  