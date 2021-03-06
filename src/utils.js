import { NUMBER_OF_NUMBERS } from "./config";

export const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const sleepFor = sleepDuration =>
  new Promise((res, rej) => setTimeout(res, sleepDuration));

export const range = (n, fn) => new Array(n).fill().map(fn);
