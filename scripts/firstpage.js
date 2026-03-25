document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("check");
  const btn = document.getElementById("btn");
  const alertBox = document.getElementById("alert-checkbox");

  // Rain
  const rainImageUrl = "./assets/images/stefano.png";
  let rainInterval;

  // Rain 2
  function createRainDrop() {
    const drop = document.createElement("img");
    drop.src = rainImageUrl;
    drop.classList.add("rain-drop");

    drop.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * (100 - 60) + 60;
    drop.style.width = size + "px";

    // Duration timer
    const duration = Math.random() * (4 - 2) + 2;
    drop.style.animationDuration = duration + "s";
    document.body.appendChild(drop);
    // remove animation
    setTimeout(function () {
      drop.remove();
    }, duration * 1000);
  }

  // Stop rain
  function toggleRain() {
    if (checkbox.checked) {
      createRainDrop();
      rainInterval = setInterval(createRainDrop, 150);
      setTimeout(function () {
        clearInterval(rainInterval);
        console.log("Generazione pioggia terminata dopo 5 secondi");
      }, 5000);
    } else {
      clearInterval(rainInterval);
    }
  }
  checkbox.addEventListener("change", toggleRain);

  // Btn click
  btn.addEventListener("click", function () {
    if (!checkbox.checked) {
      // Alert
      alertBox.classList.add("alert-visible");
      setTimeout(function () {
        alertBox.classList.remove("alert-visible");
      }, 3000);
    } else {
      btn.classList.add("btn-expand");
      setTimeout(function () {
        window.location.href = "welcome.html";
      }, 500);
    }
  });
});
