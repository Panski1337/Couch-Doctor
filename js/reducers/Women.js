import * as ActionTypes from '../constants/ActionTypes';
import {stepDaughter} from "../lib/characters/women/StepDaughter";
import {wife} from "../lib/characters/women/Wife";
import {combineStats} from "../utils/characterHelper";
import merge from 'deepmerge';

let defaultState = {
  wife,
  stepDaughter
};
let objToAssign;

export default function (state = defaultState, action) {

  switch (action.type) {
    case ActionTypes.WOMAN_RAISE_STATS:
      objToAssign = {};
      objToAssign[action.character] = {
        stats: combineStats(state[action.character].stats, action.stats, (a, b) => a + b)
      };
      return merge(state, objToAssign);
    case ActionTypes.WOMAN_LOWER_STATS:
      objToAssign = {};
      objToAssign[action.character] = {
        stats: combineStats(state[action.character].stats, action.stats, (a, b) => a - b)
      };
      return merge(state, objToAssign);
    default:
      return state;
  }
}






