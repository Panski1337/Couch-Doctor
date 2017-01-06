import * as reducers from './index';
import {combineReducers} from "redux";
import * as IngameMenuAT from "../constants/ActionTypes/Menus/IngameMenuAT";

const appReducer = combineReducers({
  ...reducers
});

export const globalReducer = (state, action) => {
  switch (action.type) {
    case IngameMenuAT.RESTART:
      state = {
        saves: JSON.parse(JSON.stringify(state.saves)),
        options: JSON.parse(JSON.stringify(state.options))
      };
      return appReducer(state, action);
    default:
      return appReducer(state, action);
  }
}

