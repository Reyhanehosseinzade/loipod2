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
  

  // podcast player *************************
  let audio = document.querySelector("#audio");
let timeLeft = document.querySelector(".time-left");
let timePassed = document.querySelector(".time-passed");
var fill = document.getElementById("fill");
var fill_btn = document.getElementById("fill-btn");
let played = false;
function play_pause() {
  if (played) {
    audio.pause();
    document.querySelector(".bi-play-fill").style.display = "flex";
    document.querySelector(".bi-pause-fill").style.display = "none";
    played = false;
  } else {
    audio.play();
    document.querySelector(".bi-play-fill").style.display = "none";
    document.querySelector(".bi-pause-fill").style.display = "flex";
    played = true;
  }
}
function changeFormat(time) {
  let minute = parseInt(time / 60);
  let second = parseInt(time - minute * 60);
  if (second > 9) {
    return minute.toString() + ":" + second.toString();
  } else {
    return minute.toString() + ":0" + second.toString();
  }
}
function next_30() {
  if (audio.currentTime + 30 > audio.duration)
    audio.currentTime = audio.duration;
  else audio.currentTime += 30;
}
function back_10() {
  if (audio.currentTime - 10 > audio.duration)
    audio.currentTime = audio.duration;
  else audio.currentTime -= 10;
}

slider("volume", "volume");
slider(
  "time-line",
  "time-line",
  function () {
    audio.pause();
  },
  function () {
    if (played) audio.play();
  }
);

audio.addEventListener("timeupdate", function () {
  fill.style.width = (audio.currentTime * 100) / audio.duration + "%";
  fill_btn.style.left = (audio.currentTime * 100) / audio.duration + "%";
  timePassed.innerHTML = changeFormat(audio.currentTime);
  timeLeft.innerHTML = changeFormat(audio.duration);
});
