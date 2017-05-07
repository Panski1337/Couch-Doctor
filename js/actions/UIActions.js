import * as ActionTypes from '../constants/ActionTypes';
import placeIndex from '../lib/indices/placeIndex'
import callTrigger from '../lib/indices/triggerIndex';
import {TriggerHandler} from "../lib/triggers/TriggerHandler";

export function navigateEventText(textCounter = 1) {
  return {type: ActionTypes.UI_NAVIGATE_EVENT_TEXT, textCounter};

}

export function navigatePlaceText(textCounter = 1) {
  return {type: ActionTypes.UI_NAVIGATE_PLACE_TEXT, textCounter};
}

export function performAction(action) {
  return dispatch => {
    action.dispatches && action.dispatches.forEach(action => dispatch(action));
    dispatch({type: ActionTypes.UI_PERFORM_ACTION, place: placeIndex(action.place)})
  }
}

export function changePlace(place = {}) {
  return {type: ActionTypes.CHANGE_PLACE, place}
}
