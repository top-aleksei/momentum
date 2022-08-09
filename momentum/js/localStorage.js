import { name } from "./CONSTANTS.js";

// SET/GET LOCAL STORAGE
export function setLocalStorage() {
  localStorage.setItem("name", name.value);
}
export function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
