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
      : "hsl(200, 8%, 88%)";
  setSelectionElement.style.color = lockButtonElement.classList.contains(
    "buttonToggle"
  )
    ? "#ff7b00"
    : "hsl(200, 8%, 88%)";
}

// Done sets
let doneSetsElement = document.getElementsByClassName("doneSets")[0];
let doneSets = parseInt(localStorage.getItem("doneSets") || 0);
doneSetsElement.innerHTML = doneSets;

function setsPlus() {
  doneSets < rangeInputElementValue / 10 ? doneSets++ : null,
    doneSets == rangeInputElementValue / 10
      ? (doneSetsElement.style.color = "#ff7b00")
      : null,
    (doneSetsElement.innerHTML = doneSets),
    localStorage.setItem("doneSets", doneSets);
}

function setsReset() {
  (doneSetsElement.style.color = "hsl(200, 8%, 88%)"),
    (doneSets = 0),
    (doneSetsElement.innerHTML = doneSets),
    localStorage.setItem("doneSets", doneSets);
}
