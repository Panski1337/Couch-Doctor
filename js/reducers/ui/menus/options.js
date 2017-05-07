import * as IngameMenuAT from '../../../constants/ActionTypes/ui/menus/IngameMenuAT';
import * as SaveMenuAT from '../../../constants/ActionTypes/ui/menus/SaveMenuAT';
import * as LoadMenuAT from '../../../constants/ActionTypes/ui/menus/LoadMenuAT';
import * as OptionsMenuAT from '../../../constants/ActionTypes/ui/menus/OptionsMenuAT';

const defaultOptionsMenu = {isVisible: false};

export default function (state = defaultOptionsMenu, action) {
  switch (action.type) {
    case OptionsMenuAT.OPEN_OPTIONS_MENU:
      return Object.assign({}, state, {isVisible: true});
    case OptionsMenuAT.CLOSE_OPTIONS_MENU:
    case LoadMenuAT.OPEN_LOAD_MENU:
    case SaveMenuAT.OPEN_SAVE_MENU:
    case IngameMenuAT.CLOSE_INGAME_MENU:
      return Object.assign({}, state, {isVisible: false});
    default:
      return state;
  }
}
