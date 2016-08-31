import {MIN_STAT_VALUE, MAX_STAT_VALUE} from "../constants/Config";

export function combineStats(object1, object2, calc) {
  const newObj = JSON.parse(JSON.stringify(object1));
  Object.keys(newObj).forEach(key => {
    if (object2[key] && object2[key].value) {
      let value = calc(newObj[key].value, (object2[key].value || 0));
      // Value between 0 - 100
      newObj[key].value = Math.min(Math.max(value, MIN_STAT_VALUE), MAX_STAT_VALUE);
    }
  });
  return newObj;
}