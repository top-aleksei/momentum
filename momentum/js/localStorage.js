import { name } from "./CONSTANTS.js";

// SET/GET LOCAL STORAGE
function setLocalStorage() {
  localStorage.setItem("name", name.value);
}
function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);
