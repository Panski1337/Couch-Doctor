import * as ActionTypes from '../constants/ActionTypes';
import getScene from '../lib/indices/sceneIndex'

export function updateUI(ui) {
  return {type: ActionTypes.UI_TEXT_COUNT_UP, ui}
}

export function performAction(action) {
  return dispatch => {
    action.dispatches && action.dispatches.forEach(action => dispatch(action));
    dispatch({type: ActionTypes.UI_PERFOM_ACTION, scene: getScene(action.scene)})
  }
}

