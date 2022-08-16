import { setBg } from "./bg.js";
import { SETTINGS_BTN, settingsApp, EN_BTN, RU_BTN } from "./CONSTANTS.js";
import { showTime } from "./data&time.js";
import { vocabulary } from "./EnRu.js";
import { translateQuote } from "./quotes.js";
import { translateMenu } from "./translateSettings.js";
import { getWeather } from "./weather.js";

// constants for Background Settings
const bgSettings = document.querySelector(".settings-background"); //box with bg settings
export const bgSwitchers = document.querySelectorAll(".bgSwitcher");
export const unsplashTag = document.querySelector(".unsplashTag");
export const flickrTag = document.querySelector(".flickrTag");
const bgSettingsItems = document.querySelectorAll(".bg-item-content");

export let defaultLanguage;
export let bgSource;
// export let defaultLanguage = localStorage.lang || "en";
// export let bgSource = localStorage.bgSource || "git";

export function showSettings() {
  settingsApp.classList.toggle("hide-with-opacity");
}

export function onEnglish() {
  EN_BTN.classList.add("active-language");
  RU_BTN.classList.remove("active-language");
  defaultLanguage = "en";
  translateQuote();
  showTime();
  getWeather();
  translateMenu();
  console.log(defaultLanguage);
}

export function onRussian() {
  EN_BTN.classList.remove("active-language");
  RU_BTN.classList.add("active-language");
  defaultLanguage = "ru";
  translateQuote();
  showTime();
  getWeather();
  translateMenu();
}

export function hideSettings(e) {
  if (
    !e.composedPath().includes(settingsApp) &&
    !e.composedPath().includes(SETTINGS_BTN)
  ) {
    settingsApp.classList.add("hide-with-opacity");
  }
}

export function showRightChoosenLang() {
  if (defaultLanguage == "en") {
    EN_BTN.classList.add("active-language");
    RU_BTN.classList.remove("active-language");
  } else {
    EN_BTN.classList.remove("active-language");
    RU_BTN.classList.add("active-language");
  }
}

// LOCAL STORAGE(LANGUAGE && BG-SOURCE)
export function setDefaultSettings() {
  localStorage.setItem("lang", defaultLanguage);
  localStorage.setItem("bgSource", bgSource);
  localStorage.setItem("unsplashTag", unsplashTag.value);
  localStorage.setItem("flickrTag", flickrTag.value);
}
export function getDefaultSettings() {
  if (localStorage.getItem("lang") && localStorage.getItem("lang") != "null") {
    defaultLanguage = localStorage.getItem("lang");
  } else {
    defaultLanguage = "en";
  }
  if (
    localStorage.getItem("bgSource") &&
    localStorage.getItem("bgSource") != "null"
  ) {
    bgSource = localStorage.getItem("bgSource");
  } else {
    bgSource = "git";
  }
  unsplashTag.value = localStorage.getItem("unsplashTag");
  flickrTag.value = localStorage.getItem("flickrTag");
  showRightSource();
  translateMenu();
  unsplashTag.placeholder = vocabulary[defaultLanguage].tag;
  flickrTag.placeholder = vocabulary[defaultLanguage].tag;
}

// BG-SOURCE

export function showRightSource() {
  switch (bgSource) {
    case "git":
      bgSwitchers[0].checked = true;
      break;
    case "unsplash":
      bgSwitchers[0].checked = false;
      bgSwitchers[1].checked = true;
      bgSwitchers[2].checked = false;
      break;
    case "flickr":
      bgSwitchers[0].checked = false;
      bgSwitchers[1].checked = false;
      bgSwitchers[2].checked = true;
  }
}

export function changeBgSource() {
  //CHANGE BGSOURCE FROM UNSPLASH
  bgSource = "git";
}

bgSwitchers.forEach((radio) =>
  radio.addEventListener("change", () => (bgSource = radio.value))
);
bgSwitchers.forEach((radio) => radio.addEventListener("change", setBg));
unsplashTag.addEventListener("change", () => (bgSource = "unsplash"));
unsplashTag.addEventListener("change", setBg);
unsplashTag.addEventListener("change", showRightSource);
flickrTag.addEventListener("change", setBg);
flickrTag.addEventListener("change", () => (bgSource = "flickr"));
flickrTag.addEventListener("change", showRightSource);
