import * as IngameMenuAT from '../../../constants/ActionTypes/ui/menus/IngameMenuAT';
import * as LoadMenuAT from "../../../constants/ActionTypes/ui/menus/LoadMenuAT";

const defaultIngameMenu = {isVisible: false};

export default function (state = defaultIngameMenu, action) {
  switch (action.type) {
    case IngameMenuAT.OPEN_INGAME_MENU:
      return Object.assign({}, state, {isVisible: true});
    case LoadMenuAT.LOAD:
    case IngameMenuAT.CLOSE_INGAME_MENU:
      return Object.assign({}, state, {isVisible: false});
    default:
      return state;
  }
}