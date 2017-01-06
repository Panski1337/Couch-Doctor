import * as IngameMenuAT from '../constants/ActionTypes/Menus/IngameMenuAT';
import * as SaveMenuAT from '../constants/ActionTypes/Menus/SaveMenuAT';
import * as LoadMenuAT from '../constants/ActionTypes/Menus/LoadMenuAT';
import * as OptionsMenuAT from '../constants/ActionTypes/Menus/OptionsMenuAT';
import {combineReducers} from "redux";

const defaultIngameMenu = {isVisible: false};
const defaultSaveMenu = {isVisible: false};
const defaultLoadMenu = {isVisible: false};
const defaultOptionsMenu = {isVisible: false};

function ingameMenu(state = defaultIngameMenu, action) {
  switch (action.type) {
    case IngameMenuAT.OPEN_INGAME_MENU:
      return Object.assign({}, state, {isVisible: true});
    case IngameMenuAT.CLOSE_INGAME_MENU:
      return Object.assign({}, state, {isVisible: false});
    default:
      return state;
  }
}

function saveMenu(state = defaultSaveMenu, action) {
  switch (action.type) {
    case SaveMenuAT.OPEN_SAVE_MENU:
      return Object.assign({}, state, {isVisible: true});
    case SaveMenuAT.CLOSE_SAVE_MENU:
    case LoadMenuAT.OPEN_LOAD_MENU:
    case OptionsMenuAT.OPEN_OPTIONS_MENU:
    case IngameMenuAT.CLOSE_INGAME_MENU:
      return Object.assign({}, state, {isVisible: false});
    default:
      return state;
  }
}

function loadMenu(state = defaultLoadMenu, action) {
  switch (action.type) {
    case LoadMenuAT.OPEN_LOAD_MENU:
      return Object.assign({}, state, {isVisible: true});
    case LoadMenuAT.CLOSE_LOAD_MENU:
    case SaveMenuAT.OPEN_SAVE_MENU:
    case OptionsMenuAT.OPEN_OPTIONS_MENU:
    case IngameMenuAT.CLOSE_INGAME_MENU:
      return Object.assign({}, state, {isVisible: false});
    default:
      return state;
  }
}

function optionsMenu(state = defaultOptionsMenu, action) {
  switch (action.type) {
    case OptionsMenuAT.OPEN_OPTIONS_MENU:
      return Object.assign({}, state, {isVisible: true});
    case OptionsMenuAT.CLOSE_OPTIONS_MENU:
    case LoadMenuAT.OPEN_LOAD_MENU:
    case SaveMenuAT.OPEN_SAVE_MENU:
    case IngameMenuAT.CLOSE_INGAME_MENU:
      return Object.assign({}, state, {isVisible: false});
    default:
      return state;
  }
}


export default combineReducers({
  ingameMenu,
  saveMenu,
  loadMenu,
  optionsMenu
})
