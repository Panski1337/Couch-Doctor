import * as ActionTypes from '../constants/ActionTypes';
import placeIndex from '../lib/indices/placeIndex';
import eventIndex from '../lib/indices/eventIndex';
import {START_PLACE, START_EVENTS} from "../constants/Config";
import * as LoadMenuAT from "../constants/ActionTypes/ui/menus/LoadMenuAT";

const defaultView = {
  place: placeIndex(START_PLACE),
  events: eventIndex(START_EVENTS)
};

export default function(state = defaultView, action) {
  switch (action.type) {
    case LoadMenuAT.LOAD:
      return action.save.view;
    case ActionTypes.UI_NAVIGATE_EVENT_TEXT:
      let event = Object.assign({}, state.events[0], {...state.events[0], textCounter: action.textCounter});
      return Object.assign({}, state, {events: [event, ...state.events.slice(1)]});
    case ActionTypes.UI_NAVIGATE_PLACE_TEXT:
      return Object.assign({}, state, {place: {...state.place, textCounter: action.textCounter}});
    case ActionTypes.UI_PERFORM_ACTION:
      return Object.assign({}, state, {place: action.place, events: action.events});
    case ActionTypes.CHANGE_PLACE:
      return Object.assign({}, state, {place: action.place});
    default:
      return state;
  }
}






