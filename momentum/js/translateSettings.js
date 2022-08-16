import { vocabulary } from "./EnRu.js";
import { defaultLanguage } from "./settings.js";
import { unsplashTag, flickrTag } from "./settings.js";

const settings = document.querySelector(".nav-title");
const navItem = [...document.querySelectorAll(".nav-item")].slice(1);
const bgimage = document.getElementById("bgimage");
const bgSourceTitle = [...document.querySelectorAll(".bgSource")];
const setDescriptions = [
  ...document.querySelectorAll(".bg-settings-description"),
];
const visabilityTitle = document.getElementById("visability");
const visabilityElements = [
  ...document.querySelectorAll(".bg-item-content"),
].slice(3);

export function translateMenu() {
  settings.textContent = vocabulary[defaultLanguage].settings;
  navItem[0].textContent = vocabulary[defaultLanguage].background;
  navItem[1].textContent = vocabulary[defaultLanguage].showelements;
  bgimage.textContent = vocabulary[defaultLanguage].bgimage;
  bgSourceTitle[0].textContent = vocabulary[defaultLanguage].bgGit;
  bgSourceTitle[1].textContent = vocabulary[defaultLanguage].bgSplash;
  bgSourceTitle[2].textContent = vocabulary[defaultLanguage].bgflickr;
  setDescriptions[0].textContent = vocabulary[defaultLanguage].descr1;
  setDescriptions[1].textContent = vocabulary[defaultLanguage].descr2;
  setDescriptions[2].textContent = vocabulary[defaultLanguage].descr3;
  setDescriptions[3].textContent = vocabulary[defaultLanguage].descr1;
  setDescriptions[4].textContent = vocabulary[defaultLanguage].descr2;
  //   show/hide elements
  visabilityTitle.textContent = vocabulary[defaultLanguage].showelements;
  visabilityElements[0].textContent = vocabulary[defaultLanguage].weather;
  visabilityElements[1].textContent = vocabulary[defaultLanguage].clock;
  visabilityElements[2].textContent = vocabulary[defaultLanguage].music;
  visabilityElements[3].textContent = vocabulary[defaultLanguage].dateWord;
  visabilityElements[4].textContent = vocabulary[defaultLanguage].greeting;
  visabilityElements[5].textContent = vocabulary[defaultLanguage].quotes;
  // bg tegs
  unsplashTag.placeholder = vocabulary[defaultLanguage].tag;
  flickrTag.placeholder = vocabulary[defaultLanguage].tag;
}
