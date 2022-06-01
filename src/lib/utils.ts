const COLOR_TAG_REGEX = /<{(#([a-f0-9]{6})})(.*?)>/gi;
const BOLD_TAG_REGEX = /%(.*?)%/ig;

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

export function formatBoldTags(message: string){
  if(!message.match(BOLD_TAG_REGEX)){
    return message;
  }

  while (message.match(BOLD_TAG_REGEX)) {
    const messageExec = BOLD_TAG_REGEX.exec(message);
    message = message.replace(
      // @ts-ignore
      messageExec[0],
      // @ts-ignore
      `<strong>${ messageExec[1] }</strong>`
    );
  }

  return message;
}

export function formatColorTags(message: string){
  console.log(message)
  if(!message.match(COLOR_TAG_REGEX)){
    return formatBoldTags(message);
  }

  while(message.match(COLOR_TAG_REGEX)){
    const messageExec = COLOR_TAG_REGEX.exec(message);
    message = message.replace(
      // @ts-ignore
      messageExec[0],
      // @ts-ignore
      `<span style="color: #${ messageExec[2] }">${ messageExec[3] }</span>`
    );
  }

  return formatBoldTags(message);
};


