import Place from "../../../../js/lib/models/Place";
import Action from "../../../../js/lib/models/Action";
import imageUrl from '../../../../img/house/entrance1.jpg';
import * as Places from "../../../../js/constants/Places";

const places = [
  Places.HOUSE_FRONT,
  Places.LIVING_ROOM_1,
  Places.DINING_ROOM,
  Places.KITCHEN_3,
  Places.OFFICE,
  Places.BEDROOM_2,
  Places.BATHROOM_2
];

const actions = [

];

export default new Place(Places.ENTRANCE_1, imageUrl, places, actions).asPlainObject();