import { randomNumber } from './helpers';
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'DEMO_KEY';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = '//api.nasa.gov/planetary/apod?api_key=iXTV4P0XTkiL3BE3A7fRHQ7F8m7HCrbXZGpTzO70&date=';

/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
  var randomDate = getRandomDate();
  const searchString = URL + randomDate;

  const res = await fetch(searchString);
  const{
    media_type: type,
    url: mediaUrl,
    explanation: text,
    title,
  } = await res.json();

  return {
    type, mediaUrl, text, title,
  };
}

function getRandomDate() {
  var fDate = new Date('June 16, 1995 00:00:00');
  var lowerTime = fDate.getTime();
  var currentTime = Date.now();
  var time = randomNumber(lowerTime,currentTime);
  var rDate = new Date(time);
  var d = rDate.getDate();
  var m = rDate.getMonth();
  var y = rDate.getFullYear();

  return `${y}-${m}-${d}`;
}
