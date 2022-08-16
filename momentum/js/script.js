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
  MUTE_BTN,
  volumeInput,
  progressContainer,
  PLAY_BTN,
  PLAY_NEXT_BTN,
  PLAY_PREV_BTN,
  showTodoBTN,
  todoInput,
} from "./CONSTANTS.js";
import { setLocalStorage, getLocalStorage } from "./localStorage.js";
import { getRandomNum, setBg, getSlideNext, getSlidePrev } from "./bg.js";
import {
  getCityLocalStorage,
  getWeather,
  setCityLocalStorage,
} from "./weather.js";
import { getQuotes } from "./quotes.js";
import {
  getMuted,
  setVolume,
  setProgress,
  audio,
  updateProgress,
  createPlayList,
  playAudio,
  playNext,
  playPrev,
} from "./audio.js";
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
import {
  showTodoApp,
  createNewTodo,
  hideTodoApp,
  setTodosLocalStore,
  getTodosLocalStore,
  checkTodosQty,
} from "./todo.js";

getDefaultSettings();

//LOCAL STORAGE (name)
window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);

showTime();

//audio//
MUTE_BTN.addEventListener("click", getMuted);
volumeInput.addEventListener("input", setVolume);
progressContainer.addEventListener("click", setProgress);
audio.addEventListener("timeupdate", updateProgress);
document.addEventListener("DOMContentLoaded", createPlayList);
PLAY_BTN.addEventListener("click", playAudio);
PLAY_NEXT_BTN.addEventListener("click", playNext);
PLAY_PREV_BTN.addEventListener("click", playPrev);
audio.addEventListener("ended", playNext);
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
QUOTE_BTN.addEventListener("click", getQuotes);

//SETTINGS

EN_BTN.addEventListener("click", onEnglish);
RU_BTN.addEventListener("click", onRussian);
SETTINGS_BTN.addEventListener("click", showSettings);
body.addEventListener("click", hideSettings);
window.addEventListener("beforeunload", setDefaultSettings);
window.addEventListener("load", getDefaultSettings);
window.addEventListener("load", showRightChoosenLang);

//TODO
showTodoBTN.addEventListener("click", showTodoApp);
todoInput.addEventListener("change", createNewTodo);
body.addEventListener("click", hideTodoApp);
window.addEventListener("beforeunload", setTodosLocalStore);
window.addEventListener("load", getTodosLocalStore);
window.addEventListener("load", checkTodosQty);
