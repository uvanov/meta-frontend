export function addHexAlpha(color: string, opacity: number) {
  let hex = color.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${ r }, ${ g }, ${ b }, ${ opacity })`;
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
    return parseFloat(result.toFixed(1));
  }
};

export function matchToEnglishAlphabet(string: string) {
  return /^[a-zA-Z]+$/.test(string);
};

export function getGradient(primary: string, secondary: string, degree?: number){
  return `linear-gradient(${degree ? degree : 0}deg, ${primary}, ${secondary})`;
};
