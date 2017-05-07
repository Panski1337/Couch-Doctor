import * as IngameMenuAT from '../../../constants/ActionTypes/ui/menus/IngameMenuAT';
import * as SaveMenuAT from '../../../constants/ActionTypes/ui/menus/SaveMenuAT';
import * as LoadMenuAT from '../../../constants/ActionTypes/ui/menus/LoadMenuAT';
import * as OptionsMenuAT from '../../../constants/ActionTypes/ui/menus/OptionsMenuAT';

const defaultSaveMenu = {isVisible: false};

export default function (state = defaultSaveMenu, action) {
  switch (action.type) {
    case SaveMenuAT.OPEN_SAVE_MENU:
      return Object.assign({}, state, {isVisible: true});
    case SaveMenuAT.CLOSE_SAVE_MENU:
    case LoadMenuAT.OPEN_LOAD_MENU:
    case OptionsMenuAT.OPEN_OPTIONS_MENU:
    case IngameMenuAT.CLOSE_INGAME_MENU:
      return Object.assign({}, state, {isVisible: false});
    default:
      return state;
  }
}
