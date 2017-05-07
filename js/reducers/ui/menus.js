import ingame from './menus/ingame';
import save from './menus/save';
import load from './menus/load';
import options from './menus/options';
import {combineReducers} from "redux";



export default combineReducers({
  ingame,
  options,
  load,
  save
})
