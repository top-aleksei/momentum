import { quote, author } from "./CONSTANTS.js";
import { defaultLanguage } from "./settings.js";
let currenQuote;

export async function getQuotes() {
  const quotes = "./../json/data.json";
  const res = await fetch(quotes);
  const data = await res.json();

  let arr = data[defaultLanguage];
  console.log(defaultLanguage);
  currenQuote = Math.floor(Math.random() * arr.length);
  let q = arr[currenQuote];
  quote.textContent = q.text;
  author.textContent = q.author;
}

export async function translateQuote() {
  const quotes = "./../json/data.json";
  const res = await fetch(quotes);
  const data = await res.json();

  let arr = data[defaultLanguage];
  let q = arr[currenQuote];
  quote.textContent = q.text;
  author.textContent = q.author;
}
