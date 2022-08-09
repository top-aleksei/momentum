import { vocabulary } from "./EnRu.js";
import { defaultLanguage } from "./settings.js";

// GET TIME OF DAY
export function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  // const partOfDay = ["night", "morning", "afternoon", "evening"];
  // return vocabulary[defaultLanguage].partOfDay[Math.trunc(hours / 6)];
  return Math.trunc(hours / 6);
}
