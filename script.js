// Chrono
let startButtonElement = document.getElementsByClassName("startButton")[0];
let startImageElement = document.getElementsByClassName("startImage")[0];
let resetButtonElement = document.getElementsByClassName("resetButton")[0];
let minutesElement = document.getElementById("mins");
let secondsElement = document.getElementById("secs");

let minutes = 0;
let seconds = 0;

function startCounting() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes < 10) {
      minutesElement.innerHTML = `0${minutes}`;
    } else {
      minutesElement.innerHTML = minutes;
    }
  }
  if (seconds < 10) {
    secondsElement.innerHTML = `0${seconds}`;
  } else {
    secondsElement.innerHTML = seconds;
  }
}

function startingButton() {
  startButtonElement.classList.add("buttonToggle");
  startButtonElement.disabled = true;
  startImageElement.src = "start-goes.svg";
  startingInterval = setInterval(startCounting, 1000);
}

function resetButton() {
  startButtonElement.classList.remove("buttonToggle");
  startButtonElement.disabled = false;
  startImageElement.src = "start.svg";
  try {
    clearInterval(startingInterval);
  } catch {
    console.log("'startingInterval' - Has not yet started.");
  }

  (minutes = 0), (seconds = 0);
  minutesElement.innerHTML = `0${minutes}`;
  secondsElement.innerHTML = `0${seconds}`;
}

// Counter
let counter = parseInt(localStorage.getItem("counter")) || 0;
const totalCountElement = document.body.getElementsByClassName("totalCount")[0];
totalCountElement.innerHTML = counter;

function counterPlus1() {
  counter++,
    (totalCountElement.innerHTML = counter),
    localStorage.setItem("counter", counter);
}

function counterPlus5() {
  (counter = counter + 5),
    (totalCountElement.innerHTML = counter),
    localStorage.setItem("counter", counter);
}

function counterPlus10() {
  (counter = counter + 10),
    (totalCountElement.innerHTML = counter),
    localStorage.setItem("counter", counter);
}

function counterPlus25() {
  (counter = counter + 25),
    (totalCountElement.innerHTML = counter),
    localStorage.setItem("counter", counter);
}

function counterPlus50() {
  (counter = counter + 50),
    (totalCountElement.innerHTML = counter),
    localStorage.setItem("counter", counter);
}

function counterReset() {
  (counter = 0),
    (totalCountElement.innerHTML = counter),
    localStorage.setItem("counter", counter);
}

// Setting sets and lock
let rangeInputElementValue =
  document.getElementsByClassName("rangeInput")[0].value * 0.1;
let rangeInputElement = document.getElementsByClassName("rangeInput")[0];
let setSelectionElement = document.getElementsByClassName("setSelection")[0];

let setSelectionVar = parseInt(
  localStorage.getItem("setSelectionVar") || rangeInputElementValue
);
setSelectionElement.innerHTML = rangeInputElementValue;

function updateRangeSlider(value) {
  let newValue = value * 0.1;
  setSelectionElement.innerHTML = newValue;
  localStorage.setItem("setSelectionVar", newValue);
}

let lockButtonElement = document.getElementsByClassName("lockButton")[0];
let lockImageElement = document.getElementsByClassName("lockImage")[0];

let lockState = localStorage.getItem("lockState") === "true";
window.addEventListener("load", () => {
  let savedValue = localStorage.getItem("setSelectionVar") || "0";
  let rangeInput = document.getElementsByClassName("rangeInput")[0];
  rangeInput.value = parseFloat(savedValue) * 10;
  updateRangeSlider(rangeInput.value);
  if (lockState) {
    lockButtonElement.classList.add("buttonToggle");
    lockImageElement.src = "lock-closed.svg";
    lockImageElement.style.marginLeft = "0px";
    rangeInputElement.disabled = true;
    rangeInputElement.style.backgroundColor = "#ff7b00";
    setSelectionElement.style.color = "#ff7b00";
    doneSetsElement.style.color = "#ff7b00";
  }
});

function toggleLock() {
  lockButtonElement.classList.toggle("buttonToggle");
  const isLocked = lockButtonElement.classList.contains("buttonToggle");

  lockImageElement.src = lockButtonElement.classList.contains("buttonToggle")
    ? "lock-closed.svg"
    : "lock-open.svg";
  lockImageElement.style.marginLeft = lockButtonElement.classList.contains(
    "buttonToggle"
  )
    ? "0px"
    : "2px";
  rangeInputElement.disabled = lockButtonElement.classList.contains(
    "buttonToggle"
  )
    ? true
    : false;
  rangeInputElement.style.backgroundColor =
    lockButtonElement.classList.contains("buttonToggle")
      ? "#ff7b00"
      : "hsl(200, 8%, 88%)";
  setSelectionElement.style.color = lockButtonElement.classList.contains(
    "buttonToggle"
  )
    ? "#ff7b00"
    : "hsl(200, 8%, 88%)";

  (doneSets = lockButtonElement.classList.contains("buttonToggle")
    ? null
    : localStorage.setItem("doneSets", 0)),
    (doneSetsElement.innerHTML = 0);
  localStorage.setItem("lockState", isLocked);
}

function revertSetsColor() {
  doneSetsElement.style.color = "hsl(200, 8%, 88%)";
}

// Done sets
let doneSetsElement = document.getElementsByClassName("doneSets")[0];
let doneSets = parseInt(localStorage.getItem("doneSets") || 0);
doneSetsElement.innerHTML = doneSets;

function setsPlus() {
  if (
    lockButtonElement.classList.contains("buttonToggle") &&
    rangeInputElementValue != 0
  ) {
    doneSets < rangeInputElementValue ? doneSets++ : null,
      doneSets == rangeInputElementValue
        ? (doneSetsElement.style.color = "#ff7b00")
        : null,
      (doneSetsElement.innerHTML = doneSets),
      localStorage.setItem("doneSets", doneSets);
  }
}
