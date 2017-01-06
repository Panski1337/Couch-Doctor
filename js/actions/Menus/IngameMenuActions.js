import * as ActionTypes from '../../constants/ActionTypes/Menus/IngameMenuAT';

export function closeIngameMenu() {
  return {type: ActionTypes.CLOSE_INGAME_MENU}
}

export function openIngameMenu() {
  return {type: ActionTypes.OPEN_INGAME_MENU}
}

export function restart() {
  return {type: ActionTypes.RESTART}
}