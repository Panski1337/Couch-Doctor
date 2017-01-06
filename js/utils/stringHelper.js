export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function isPresent(string) {
  return string && typeof string === 'string' && string.length > 0;
}