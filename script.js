// Counter
let counter = parseInt(localStorage.getItem("counter")) || 0;
const totalCountElement = document.body.getElementsByClassName("totalCount")[0];
totalCountElement.innerHTML = counter;

// Setting sets and lock
let rangeInputElementValue =
  document.getElementsByClassName("rangeInput")[0].value;
let rangeInputElement = document.getElementsByClassName("rangeInput")[0];
let setSelectionElement = document.getElementsByClassName("setSelection")[0];
setSelectionElement.innerHTML = rangeInputElementValue / 10;

function updateRangeSlider(value) {
  setSelectionElement.innerHTML = value / 10;
}

let lockButtonElement = document.getElementsByClassName("lockButton")[0];
let lockImageElement = document.getElementsByClassName("lockImage")[0];

function toggleLock() {
  lockButtonElement.classList.toggle("buttonToggle");
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
      : "hsl(200, 8%, 58%)";
  setSelectionElement.style.color = lockButtonElement.classList.contains(
    "buttonToggle"
  )
    ? "#ff7b00"
    : "hsl(200, 8%, 58%)";
}

// Done sets
let doneSetsElement = document.getElementsByClassName("doneSets")[0];
let doneSets = parseInt(localStorage.getItem("doneSets") || 0);
doneSetsElement.innerHTML = doneSets;
