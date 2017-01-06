import * as ActionTypes from '../../constants/ActionTypes/Menus/SaveMenuAT';

export function openSaveMenu() {
  return {type: ActionTypes.OPEN_SAVE_MENU}
}

export function closeSaveMenu() {
  return {type: ActionTypes.CLOSE_SAVE_MENU}
}

export function save(index, name) {
  return (dispatch, getState) => {
    const state = getState();
    const save = JSON.parse(JSON.stringify({
      women: state.women,
      protagonist: state.protagonist,
      view: state.view
    }));
    dispatch({type: ActionTypes.SAVE, index, name, save})
  }
}

export function removeSave(index) {
  return {type: ActionTypes.REMOVE_SAVE, index}
}

