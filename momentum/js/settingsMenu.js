const bg = [...document.querySelectorAll(".nav-item")][1];
const hideElements = [...document.querySelectorAll(".nav-item")][2];
const arrow1 = [...document.querySelectorAll(".arrow")][0];
const arrow2 = [...document.querySelectorAll(".arrow")][1];
const settingsBG = document.querySelector(".setings-background");
const settingsVIS = document.querySelector(".setings-visability");

function hoverMenu1() {
  arrow1.classList.toggle("arrow-hide");
}
function hoverMenu2() {
  arrow2.classList.toggle("arrow-hide");
}

bg.addEventListener("mouseover", hoverMenu1);
bg.addEventListener("mouseout", hoverMenu1);
bg.addEventListener("click", clickMenu1);
hideElements.addEventListener("mouseover", hoverMenu2);
hideElements.addEventListener("mouseout", hoverMenu2);
hideElements.addEventListener("click", clickMenu2);

function clickMenu1() {
  arrow1.classList.remove("arrow-hide");
  arrow2.classList.add("arrow-hide");
  settingsBG.classList.remove("hide-element");
  settingsVIS.classList.add("hide-element");

  bg.removeEventListener("mouseover", hoverMenu1);
  bg.removeEventListener("mouseout", hoverMenu1);
  hideElements.addEventListener("mouseover", hoverMenu2);
  hideElements.addEventListener("mouseout", hoverMenu2);
}

function clickMenu2() {
  arrow2.classList.remove("arrow-hide");
  arrow1.classList.add("arrow-hide");
  settingsVIS.classList.remove("hide-element");
  settingsBG.classList.add("hide-element");

  hideElements.removeEventListener("mouseover", hoverMenu2);
  hideElements.removeEventListener("mouseout", hoverMenu2);
  bg.addEventListener("mouseover", hoverMenu1);
  bg.addEventListener("mouseout", hoverMenu1);
}

function hideMenuOnLoad() {
  settingsBG.classList.add("hide-element");
  settingsVIS.classList.add("hide-element");
}
window.addEventListener("load", hideMenuOnLoad);
