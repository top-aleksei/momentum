import {
  PLAY_BTN,
  htmlPlayList,
  playerTitle,
  progress,
  playerDuration,
  volumeInput,
  MUTE_BTN,
} from "./CONSTANTS.js";
import { playList } from "./playList.js";

export const audio = new Audio();
let isPlay = false;
let isMuted = false;
let playNum = 0;
let timer = 0;
let lastVolume;

playerTitle.textContent = playList[0].title;

export function playAudio() {
  if (!isPlay) {
    audio.src = playList[playNum].src;
    audio.currentTime = timer;
    audio.play();
    PLAY_BTN.classList.add("pause");
    playerTitle.textContent = playList[playNum].title;
    isPlay = true;
    document
      .querySelectorAll(".play-item")
      [playNum].classList.add("item-active");
  } else {
    timer = audio.currentTime;
    audio.pause();
    isPlay = false;
    PLAY_BTN.classList.remove("pause");
  }
}

export function createPlayList() {
  audio.src = playList[playNum].src;
  for (let v of playList) {
    const li = document.createElement("li");
    li.classList.add("play-item");
    li.textContent = v.title;
    htmlPlayList.append(li);
  }
  document.querySelectorAll(".play-item")[0].classList.add("item-active");

  playerDuration.textContent = `0:00 / 0:39`;
}

export function playNext() {
  timer = 0;
  document
    .querySelectorAll(".play-item")
    [playNum].classList.remove("item-active");
  if (playNum == playList.length - 1) {
    playNum = 0;
  } else {
    playNum++;
  }
  isPlay = false;
  playAudio();
}

export function playPrev() {
  timer = 0;
  document
    .querySelectorAll(".play-item")
    [playNum].classList.remove("item-active");
  if (playNum == 0) {
    playNum = playList.length - 1;
  } else {
    playNum--;
  }
  isPlay = false;
  playAudio();
}
function secondsToMinutes(time) {
  let m = Math.trunc(time / 60);
  let s = time % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function updateProgress(e) {
  const length = Math.trunc(audio.duration);
  const current = Math.trunc(audio.currentTime);
  const progressPercent = (current / length) * 100;
  progress.style.width = `${progressPercent}%`;
  if (length) {
    playerDuration.textContent = `${secondsToMinutes(
      current
    )} / ${secondsToMinutes(length)}`;
  }
}

export function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

export function setVolume() {
  audio.volume = volumeInput.value;
}

export function getMuted() {
  if (!isMuted) {
    lastVolume = volumeInput.value;
    volumeInput.value = 0;
    audio.volume = 0;
    MUTE_BTN.classList.toggle("hide-muteButton");
    isMuted = true;
  } else {
    volumeInput.value = lastVolume || 0.5;
    audio.volume = lastVolume || 0.5;
    MUTE_BTN.classList.toggle("hide-muteButton");
    isMuted = false;
  }
}
