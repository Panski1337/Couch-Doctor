import * as ActionTypes from '../constants/ActionTypes';
import {protagonist} from "../lib/characters/protagonist/Man";
import {combineStats} from "../utils/characterHelper";
import * as LoadMenuAT from "../constants/ActionTypes/ui/menus/LoadMenuAT";

export default function (state = protagonist, action) {
  switch (action.type) {
    case LoadMenuAT.LOAD:
      return action.save.protagonist;
    case ActionTypes.RAISE_STATS:
      return Object.assign({}, state, {stats: combineStats(state.stats, action.stats, (a, b) => a + b)});
    case ActionTypes.LOWER_STATS:
      return Object.assign({}, state, {stats: combineStats(state.stats, action.stats, (a, b) => a - b)});
    case ActionTypes.RAISE_MONEY:
      return Object.assign({}, state, {money: state.money + action.money});
    case ActionTypes.LOWER_MONEY:
      return Object.assign({}, state, {money: state.money - action.money});
    default:
      return state;
  }
}

