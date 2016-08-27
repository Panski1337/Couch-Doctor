import * as ActionTypes from '../constants/ActionTypes';
import getScene from '../lib/scenes/sceneIndex'

export function updateUI(ui) {
  return {type: ActionTypes.UI_TEXT_COUNT_UP, ui}
}

export function performAction(action) {  
  return {type: ActionTypes.UI_PERFOM_ACTION, scene: getScene(action.scene)}
}

