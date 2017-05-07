import * as ActionTypes from '../../../constants/ActionTypes/ui/menus/OptionsMenuAT';

export function openOptionsMenu() {
  return {type: ActionTypes.OPEN_OPTIONS_MENU}
}

export function closeOptionsMenu() {
  return {type: ActionTypes.CLOSE_OPTIONS_MENU}
}

export function changeOption(key, option, value) {
  const newOption = JSON.parse(JSON.stringify(option));
  newOption.value = value;
  return {type: ActionTypes.CHANGE_OPTION, key, option: newOption}
}