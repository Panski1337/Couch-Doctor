import Place from "../../../js/lib/models/Place";
import Action from "../../../js/lib/models/Action";
import imageUrl from '../../../img/house/dining-room.jpg';
import * as Places from "../../../js/constants/Places";

const places = [
  Places.ENTRANCE_2,
  Places.KITCHEN_3
];

const actions = [
];

export default new Place(Places.DINING_ROOM, imageUrl, places, actions).asPlainObject();