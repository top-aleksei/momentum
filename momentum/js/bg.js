import { body } from "./CONSTANTS.js";
import { getTimeOfDay } from "./getTimeOfDay.js ";
import { vocabulary } from "./EnRu.js";
import { getSplash } from "./unSplash.js";
import { bgSource } from "./settings.js";
import { getFlickr } from "./flickr.js";

export let randomNum;
export function getRandomNum() {
  randomNum = Math.floor(Math.random() * 20 + 1);
}

function takeBgFromGit() {
  const timeOfDay = vocabulary.en.partOfDay[getTimeOfDay()];
  const bgNum = randomNum.toString().padStart(2, "0");
  const url = `https://raw.githubusercontent.com/top-aleksei/momentum-background/assets/images/${timeOfDay}/${bgNum}.jpg`;
  return url;
}

export async function setBg() {
  let url;
  if (bgSource == "git") {
    url = takeBgFromGit();
  } else if (bgSource == "unsplash") {
    url = await getSplash();
    // url = takeBgFromGit(); //ЗАГЛУШКА ДЛЯ ОЖИДАНИЯ ВОССТАНОВЛЕНИЯ КОЛИЧЕСТВА ЗАПРОСОВ С API
  } else if (bgSource == "flickr") {
    url = await getFlickr();
  }
  const img = new Image();
  img.src = url;
  img.onload = () => {
    body.style.backgroundImage = `url('${url}')`;
  };
  console.log(randomNum);
}

export function getSlideNext() {
  if (randomNum == 20) {
    randomNum = 1;
  } else {
    randomNum++;
  }
  setBg();
}

export function getSlidePrev() {
  if (randomNum == 1) {
    randomNum = 20;
  } else {
    randomNum--;
  }
  setBg();
}
