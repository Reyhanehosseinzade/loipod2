function slider(
  action,
  id,
  mousedown = function () {},
  mouseup = function () {}
) {
  let parent = document.getElementById(id);
  let fill = parent.getElementsByClassName("fill")[0];
  let fill_btn = parent.getElementsByClassName("fill-btn")[0];
  let can_drag = false,
    value = 0;

  function update() {
    let pos_x = window.event.clientX;
    let left = document
      .getElementById("left-width-" + id)
      .getBoundingClientRect().left;

    let right = document
      .getElementById("right-width-" + id)
      .getBoundingClientRect().right;
    let width = right - left;

    value = (pos_x - left) / width;

    if (value < 0) value = 0;
    else if (value > 1) value = 1;

    fill.style.width = value * 100 + "%";
    fill_btn.style.left = value * 100 + "%";

    if (action == "time-line") {
      audio.currentTime = audio.duration * value;
    } else if (action == "volume") {
      audio.volume = value;
    }
  }

  parent.addEventListener("mousedown", function (e) {
    if (e.button == 0) {
      can_drag = true;
      mousedown();
    }
  });

  document.body.addEventListener("mousemove", function (e) {
    if (e.button == 0 && can_drag) update();
  });

  document.body.addEventListener("mouseup", function (e) {
    if (e.button == 0 && can_drag) {
      can_drag = false;
      mouseup();
    }
  });

  parent.addEventListener("click", function (e) {
    if (e.button == 0) {
      update();
    }
  });
}
