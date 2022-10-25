window.addEventListener("keydown", (i) => moveCat(i));

const innerContainer = document.querySelector(`#inner-container`);
const cat = document.getElementById(`cat`);
const meow = document.querySelector(`audio`);
const timer = document.querySelector(`span`);

let posY = 0;
let posX = 0;
let direction = "left";
const sleepCat = "./assets/sleep.gif";
const awakeCat = "./assets/cat.gif";

let stopwatchValue = 0;
// let stopwatch = setInterval(timerIncrease, 1000);

// function timerIncrease() {
//   stopwatchValue += 1;
//   timer.innerHTML = stopwatchValue;
// }

setInterval(() => (timer.innerHTML = stopwatchValue += 1), 1000);
// setTimeout(() => cat.setAttribute("src", sleepCat), 3000);

let sleepTimer;
function setSleep() {
  sleepTimer = setTimeout(() => (cat.src = sleepCat), 3000);
}
setSleep();

function moveCat(event) {
  if (event.key == `ArrowRight`) {
    posX += 10;
    posX > 500 ? (posX = -100) : (posX = posX);
    direction = "right";
  } else if (event.key == `ArrowUp`) {
    posY -= 10;
    posY < -100 ? (posY = 500) : (posY = posY);
  } else if (event.key == `ArrowLeft`) {
    posX -= 10;
    posX < -100 ? (posX = 500) : (posX = posX);
    direction = "left";
  } else if (event.key == `ArrowDown`) {
    posY += 10;
    posY > 500 ? (posY = -100) : (posY = posY);
  }
  cat.style.transform = `translate(${posX}px, ${posY}px) ${
    direction == "right" ? "scaleX(-1)" : "scaleX(1)"
  }`;
  meow.play();
  cat.src = awakeCat;
  //   setTimeout(() => cat.setAttribute("src", sleepCat), 1000);
  setTimeout(setSleep, 1000);
}
