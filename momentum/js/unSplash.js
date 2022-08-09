import { setBg } from "./bg.js";
import {
  bgSource,
  bgSwitchers,
  changeBgSource,
  unsplashTag,
} from "./settings.js";
import { vocabulary } from "./EnRu.js";
import { getTimeOfDay } from "./getTimeOfDay.js";

export async function getSplash() {
  let tag = unsplashTag.value;
  if (unsplashTag.value == "") {
    tag = vocabulary.en.partOfDay[getTimeOfDay()];
  }

  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=6Fa1tWpNNq__cDxPKDlmz4r1ZMzx5b-o1By7YhfuOQk`;
  const response = await fetch(url);
  if (response.status == 403) {
    bgSwitchers[1].checked = false;
    bgSwitchers[0].checked = true;
    changeBgSource();
    setBg();
    console.log(bgSource);
  }
  const data = await response.json();

  if (data.errors) {
    unsplashTag.value = "cat";
    let res = getSplash();
    return res;
  } else {
    console.log(tag);
    return data.urls.regular;
  }
}
