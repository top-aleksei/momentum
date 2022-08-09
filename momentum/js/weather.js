// WEATHER----------------------------
import {
  weatherIcon,
  temperature,
  wind,
  humidity,
  weatherDescription,
  city,
  weatherError,
} from "./CONSTANTS.js";
import { vocabulary } from "./EnRu.js";
import { defaultLanguage } from "./settings.js";

export async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${defaultLanguage}&appid=7fb8ec5b0a565d08fd02368b139f076e&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.name) {
    weatherError.textContent = "";
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${vocabulary[defaultLanguage].windSpeed} ${Math.floor(
      data.wind.speed
    )} ${vocabulary[defaultLanguage].ms}`;
    humidity.textContent = `${vocabulary[defaultLanguage].humidity} ${data.main.humidity} %`;
  } else {
    getError();
  }
}

function getError() {
  weatherIcon.className = "weather-icon owf";
  temperature.textContent = ``;
  weatherDescription.textContent = "";
  wind.textContent = ``;
  humidity.textContent = "";
  weatherError.textContent = `${vocabulary[defaultLanguage].weatherError} '${city.value}'!`;
}

export function setCityLocalStorage() {
  localStorage.setItem("city", city.value);
}
export function getCityLocalStorage() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  } else {
    city.value = vocabulary[defaultLanguage].defaultCity;
  }
}
