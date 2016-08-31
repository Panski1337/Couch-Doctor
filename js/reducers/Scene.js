import * as ActionTypes from '../constants/ActionTypes';
import getScene from '../lib/indices/sceneIndex'
import {START_SCENE} from "../constants/Config";

export default function(state = getScene(START_SCENE), action) {
  switch (action.type) {
    case ActionTypes.UI_TEXT_COUNT_UP:
      return Object.assign({}, state, {ui: action.ui});
    case ActionTypes.UI_PERFOM_ACTION:
      return Object.assign({}, action.scene);
    default:
      return state;
  }
}






