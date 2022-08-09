import {
  weather,
  time,
  player,
  dateOnPage,
  greeting,
  quoteContainer,
  weatherBTN,
  timeBTN,
  musicBTN,
  dateBTN,
  greetingBTN,
  quoteBTN,
} from "./CONSTANTS.js";

function hideWeather() {
  weather.classList.toggle("hide-with-opacity");
  localStorage.setItem("hideWeather", weatherBTN.checked);
}
function hideTime() {
  time.classList.toggle("hide-with-opacity");
  localStorage.setItem("hideTime", timeBTN.checked);
}
function hideMusic() {
  player.classList.toggle("hide-with-opacity");
  localStorage.setItem("hideMusic", musicBTN.checked);
}
function hideDate() {
  dateOnPage.classList.toggle("hide-with-opacity");
  localStorage.setItem("hideDate", dateBTN.checked);
}
function hideGreeting() {
  greeting.classList.toggle("hide-with-opacity");
  localStorage.setItem("hideGreeting", greetingBTN.checked);
}
function hideQuote() {
  quoteContainer.classList.toggle("hide-with-opacity");
  localStorage.setItem("hideQuote", quoteBTN.checked);
}

function getStorageVisability() {
  if (localStorage.getItem("hideWeather") == "true") {
    weatherBTN.checked = true;
    hideWeather();
  }
  if (localStorage.getItem("hideTime") == "true") {
    timeBTN.checked = true;
    hideTime();
  }
  if (localStorage.getItem("hideMusic") == "true") {
    musicBTN.checked = true;
    hideMusic();
  }
  if (localStorage.getItem("hideDate") == "true") {
    dateBTN.checked = true;
    hideDate();
  }
  if (localStorage.getItem("hideGreeting") == "true") {
    greetingBTN.checked = true;
    hideGreeting();
  }
  if (localStorage.getItem("hideQuote") == "true") {
    quoteBTN.checked = true;
    hideQuote();
  }
}

weatherBTN.addEventListener("change", hideWeather);
timeBTN.addEventListener("change", hideTime);
musicBTN.addEventListener("change", hideMusic);
dateBTN.addEventListener("change", hideDate);
greetingBTN.addEventListener("change", hideGreeting);
quoteBTN.addEventListener("change", hideQuote);
window.addEventListener("load", getStorageVisability);
