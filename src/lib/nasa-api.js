import { randomNumber } from './helpers';
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */

// API lykill til að fá aðgang að nasa gögnum.
// const API_KEY = 'DEMO_KEY';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = '//api.nasa.gov/planetary/apod?api_key=iXTV4P0XTkiL3BE3A7fRHQ7F8m7HCrbXZGpTzO70&date=';

function getRandomDate() {
  const fDate = new Date('June 16, 1995 00:00:00');
  const lowerTime = fDate.getTime();
  const currentTime = Date.now();
  const time = randomNumber(lowerTime, currentTime);
  const rDate = new Date(time);
  const d = rDate.getDate();
  const m = rDate.getMonth();
  const y = rDate.getFullYear();

  return `${y}-${m + 1}-${d}`;
}

/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
export default async function getRandomImage() {
  const randomDate = getRandomDate();
  const searchString = URL + randomDate;

  // const searchString = URL + '2014-10-05';

  const res = await fetch(searchString);
  const {
    media_type: type,
    url: mediaUrl,
    explanation: text,
    title,
  } = await res.json();

  return {
    type, mediaUrl, text, title,
  };
}
