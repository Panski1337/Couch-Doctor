import * as SaveMenuAT from '../constants/ActionTypes/Menus/SaveMenuAT';

const defaultSaves = [null, null, null, null, null, null, null, null, null, null];


export default function (state = defaultSaves, action) {
  switch (action.type) {
    case SaveMenuAT.SAVE:
      const saves = JSON.parse(JSON.stringify(state));
      saves[action.index] = {
        name: action.name || "Save " + action.index,
        save: action.save
      };
      return saves;
    case SaveMenuAT.REMOVE_SAVE:
      const clonedState = JSON.parse(JSON.stringify(state));
      clonedState[action.index] = null;
      return clonedState;
    default:
      return state;
  }
}

