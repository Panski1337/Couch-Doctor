import * as ActionTypes from '../constants/ActionTypes';
import {sceneIndex} from '../lib/scenes/sceneIndex'


// TODO rename to scene
export default function(state = sceneIndex.office.intro, action) {
  switch (action.type) {
    case ActionTypes.UI_TEXT_COUNT_UP:
      return Object.assign({}, state, {ui: action.ui});
    case ActionTypes.UI_PERFOM_ACTION:
      return Object.assign({}, action.scene);
    default:
      return state;
  }
}






