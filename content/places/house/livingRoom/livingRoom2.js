import Place from "../../../../js/lib/models/Place";
import Action from "../../../../js/lib/models/Action";
import imageUrl from '../../../../img/house/livingroom2.jpg';
import * as Places from "../../../../js/constants/Places";

const places = [
  Places.ENTRANCE_3,
  Places.KITCHEN_1,
  Places.POOL_1,
  Places.BEDROOM_1,
  Places.BEDROOM_2,
  Places.BATHROOM_2,
  Places.OFFICE
];

const actions = [

];

export default new Place(Places.LIVING_ROOM_2, imageUrl, places, actions).asPlainObject();