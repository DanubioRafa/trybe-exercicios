const fetch = require('node-fetch');

const generateRandomNumber = () => Math.round(Math.random() * 100);

const toUpperCaseFunc = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concatTwoStrings = (str1, str2) => str1.concat(str2);

const fetchAPI = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const responseJson = await response.json();
  return responseJson;
}


module.exports = {
  generateRandomNumber,
  toUpperCaseFunc,
  firstLetter,
  concatTwoStrings,
  fetchAPI,
};