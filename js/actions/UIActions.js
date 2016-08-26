import * as ActionTypes from '../constants/ActionTypes';
import {sceneIndex} from '../lib/scenes/sceneIndex'

export function updateUI(ui) {
  return {type: ActionTypes.UI_TEXT_COUNT_UP, ui}
}

export function performAction(action) {  
  return {type: ActionTypes.UI_PERFOM_ACTION, scene: getScene(action.screen)}
}

function getScene(key) {
  // TODO error handling
  return key.split('.').reduce((scene, keyPart) => scene[keyPart], sceneIndex)
}