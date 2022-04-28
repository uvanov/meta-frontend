export function addHexAlpha(color: string, opacity: number) {
  let _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
};

export function numberWithSpaces(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}