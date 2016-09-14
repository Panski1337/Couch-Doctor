import Place from "../../../js/lib/models/Place";
import Action from "../../../js/lib/models/Action";
import imageUrl from '../../../img/house/house-front.jpg';
import {ACTIONS_CHECK_MAIL} from "../../../js/constants/ActionTypes";
import * as Places from "../../../js/constants/Places";

const places = [
  Places.ENTRANCE_3
];

const actions = [
  new Action(Places.HOUSE_FRONT, 'checkMail', Places.HOUSE_FRONT, [{type: ACTIONS_CHECK_MAIL}]),
  new Action(Places.HOUSE_FRONT, 'checkMail', Places.HOUSE_FRONT, [{type: ACTIONS_CHECK_MAIL}]),
  new Action(Places.HOUSE_FRONT, 'checkMail', Places.HOUSE_FRONT, [{type: ACTIONS_CHECK_MAIL}]),
  new Action(Places.HOUSE_FRONT, 'checkMail', Places.HOUSE_FRONT, [{type: ACTIONS_CHECK_MAIL}])
].map(action => action.asPlainObject());

export default new Place(Places.HOUSE_FRONT, imageUrl, places, actions).asPlainObject();