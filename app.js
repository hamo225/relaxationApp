const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

// Creat the breathing animation
function breathAnimation() {
  text.innerText = "BREATH IN";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "HOLD";

    setTimeout(() => {
      text.innerText = "BREATH OUT";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
