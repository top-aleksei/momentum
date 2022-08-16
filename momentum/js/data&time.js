import { dateOnPage, time, greetingDay, name } from "./CONSTANTS.js";
import { getTimeOfDay } from "./getTimeOfDay.js";
import { vocabulary } from "./EnRu.js";
import { defaultLanguage } from "./settings.js";

// SHOW DATA
function showDate() {
  const date = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const currentDate = date.toLocaleDateString(
    vocabulary[defaultLanguage].date,
    options
  );
  dateOnPage.textContent = currentDate;
}

// SHOW TIME
export function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  showGreeting();
  setTimeout(showTime, 1000);
}

// SHOW GREETING
function showGreeting() {
  const localVocab = vocabulary[defaultLanguage];
  const timeOfDay = getTimeOfDay();
  const greetingText = `${localVocab.goodOfDay[timeOfDay]} ${localVocab.partOfDay[timeOfDay]},`;
  greetingDay.textContent = greetingText;
  if (!localStorage.name) {
    name.placeholder = localVocab.placeholder;
  }
}
