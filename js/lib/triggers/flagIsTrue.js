export default function flagIsTrue(key, game) {
  try {
    return key.split('.').reduce((flags, keyPart) => flags[keyPart], game.flags)
  } catch (e) {
    console.error('game flag not found for key: ' + key);
    return false
  }
}