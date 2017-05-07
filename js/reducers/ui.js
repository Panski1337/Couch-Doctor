import {combineReducers} from "redux";
import menus from './ui/menus.js';
import statsBar from './ui/statsBar';


export default combineReducers({
  menus,
  statsBar
})
