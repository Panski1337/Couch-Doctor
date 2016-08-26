import {EN} from "./en.js";

import {SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE} from "../constants/Config";

let currentLang = DEFAULT_LANGUAGE;

export default function t(string = '', replacementObject = {}, lang, errorCallback) {
  let result;
  
  if (!lang) lang = currentLang;

  if (SUPPORTED_LANGUAGES.indexOf(lang) > -1) {
    let langObject = getLangObject(lang);
    try {
      result = string.split('.').reduce((acc, key) => acc[key], langObject);
    } catch (ignore) {}
    if (result) {
      return Object.keys(replacementObject).reduce((newString, key) => {
        return newString.replace(`{${key}}`, replacementObject[key].toString())
      }, result)
    }
  }
  return errorCallback ? errorCallback() : 'Translation Missing: ' + string
}

function getLangObject(lang) {
  switch (lang) {
    case 'en':
      return EN;
    default:
      return EN;
  }
}

export function setLanguage(lang) {
  if (SUPPORTED_LANGUAGES.indexOf(lang) < 0) return;
  currentLang = lang
}
