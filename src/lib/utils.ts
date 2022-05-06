export function addHexAlpha(color: string, opacity: number) {
  let _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function numberWithSpaces(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export function getRandomFromRange(min: number, max: number, round?: true) {
  let result = Math.random() * (max - min) + min;
  if (round) {
    return Math.round(result);
  } else {
    return parseFloat(result.toFixed(1))
  }
};

export function matchToEnglishAlphabet(string: string) {
  return /^[a-zA-Z]+$/.test(string);
};