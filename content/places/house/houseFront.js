import Place from "../../../js/lib/models/Place";
import Action from "../../../js/lib/models/Action";
import imageUrl from '../../../img/house/house-front.jpg';
import * as ActionTypes from "../../../js/constants/ActionTypes";
import * as Places from "../../../js/constants/Places";
import greetings from '../../events/house/houseFront/hello';

const places = [
  Places.ENTRANCE_3
];

const actions = [
  new Action(Places.HOUSE_FRONT, 'checkMail', Places.HOUSE_FRONT, [{type: ActionTypes.RAISE_STATS, stats: {dominance: {value: 1}}}]),
  new Action(Places.HOUSE_FRONT, 'checkMail', Places.HOUSE_FRONT, [{type: ActionTypes.ACTIONS_CHECK_MAIL}]),
  new Action(Places.HOUSE_FRONT, 'checkMail', Places.HOUSE_FRONT, [{type: ActionTypes.ACTIONS_CHECK_MAIL}]),
  new Action(Places.HOUSE_FRONT, 'checkMail', Places.HOUSE_FRONT, [{type: ActionTypes.ACTIONS_CHECK_MAIL}])
].map(action => action.asPlainObject());

const events = [greetings];

export default new Place(Places.HOUSE_FRONT, imageUrl, places, actions, events).asPlainObject();