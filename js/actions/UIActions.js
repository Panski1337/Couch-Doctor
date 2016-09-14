import * as ActionTypes from '../constants/ActionTypes';
import placeIndex from '../lib/indices/placeIndex'

export function navigateText(textCounter = 1, isEvent = false) {
  if (isEvent) {
    return {type: ActionTypes.UI_NAVIGATE_EVENT_TEXT, textCounter};
  } else {
    return {type: ActionTypes.UI_NAVIGATE_PLACE_TEXT, textCounter};
  }  
}

export function performAction(action) {
  return dispatch => {
    action.dispatches && action.dispatches.forEach(action => dispatch(action));
    dispatch({type: ActionTypes.UI_PERFORM_ACTION, place: placeIndex(action.place)})
  }
}

export function changePlace(place) {
  return {type: ActionTypes.CHANGE_PLACE, place}
}

