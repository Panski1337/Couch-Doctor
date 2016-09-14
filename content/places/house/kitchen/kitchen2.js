import Place from "../../../../js/lib/models/Place";
import Action from "../../../../js/lib/models/Action";
import imageUrl from '../../../../img/house/kitchen2.jpg';
import * as Places from "../../../../js/constants/Places";

const places = [
  Places.POOL_1,
  Places.LIVING_ROOM_2,
  Places.ENTRANCE_2,
  Places.DINING_ROOM,
  Places.TOILET,
  Places.WASHING_ROOM
];

const actions = [

];

export default new Place(Places.KITCHEN_2, imageUrl, places, actions).asPlainObject();