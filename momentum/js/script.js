import { showTime } from "./data&time.js";
import {
  city,
  NEXT_SLIDE_BTN,
  PREV_SLIDE_BTN,
  QUOTE_BTN,
  EN_BTN,
  RU_BTN,
  SETTINGS_BTN,
  body,
} from "./CONSTANTS.js";
import "./localStorage.js";
import { getRandomNum, setBg, getSlideNext, getSlidePrev } from "./bg.js";
import {
  getCityLocalStorage,
  getWeather,
  setCityLocalStorage,
} from "./weather.js";
import { getQuotes } from "./quotes.js";
import "./audio.js";
import {
  showSettings,
  onEnglish,
  onRussian,
  hideSettings,
  showRightChoosenLang,
  getDefaultSettings,
  setDefaultSettings,
} from "./settings.js";
import "./settingsMenu.js";
import "./showHIDEelements.js";

showTime();
// getSplash();

// Weather//
getCityLocalStorage();
window.addEventListener("beforeunload", setCityLocalStorage);
window.addEventListener("load", getCityLocalStorage);

document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("change", getWeather);

//BG

getRandomNum();

NEXT_SLIDE_BTN.addEventListener("click", getSlideNext);
PREV_SLIDE_BTN.addEventListener("click", getSlidePrev);
setBg();

//QUOUTES
getQuotes();
QUOTE_BTN.addEventListener("click", () => getQuotes());

//SETTINGS

EN_BTN.addEventListener("click", onEnglish);
RU_BTN.addEventListener("click", onRussian);
SETTINGS_BTN.addEventListener("click", showSettings);
body.addEventListener("click", hideSettings);
window.addEventListener("beforeunload", setDefaultSettings);
window.addEventListener("load", getDefaultSettings);
window.addEventListener("load", showRightChoosenLang);
