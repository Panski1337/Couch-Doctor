import * as ActionTypes from '../../../constants/ActionTypes/ui/menus/LoadMenuAT';

export function openLoadMenu() {
  return {type: ActionTypes.OPEN_LOAD_MENU}
}

export function closeLoadMenu() {
  return {type: ActionTypes.CLOSE_LOAD_MENU}
}

export function load(save) {
  return {type: ActionTypes.LOAD, save: JSON.parse(JSON.stringify(save))}
}

