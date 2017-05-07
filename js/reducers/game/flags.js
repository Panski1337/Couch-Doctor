import * as ActionTypes from '../../constants/ActionTypes';
import {initialFlags} from "../../lib/game/flags/initialFlags";
import * as LoadMenuAT from "../../constants/ActionTypes/ui/menus/LoadMenuAT";

export default function (state = initialFlags, action) {
  switch (action.type) {
    case LoadMenuAT.LOAD:
      return action.save.game.flags;
    case ActionTypes.CHANGE_FLAG:
      return Object.assign({}, state, action.value);
    default:
      return state;
  }
}

