import Place from "../../../../js/lib/models/Place";
import Action from "../../../../js/lib/models/Action";
import imageUrl from '../../../../img/house/pool3.jpg';
import * as Places from "../../../../js/constants/Places";

const places = [
  Places.KITCHEN_1,
  Places.LIVING_ROOM_1,
  Places.BATHROOM_1,
  Places.POOLHOUSE
];

const actions = [

];

export default new Place(Places.POOL_3, imageUrl, places, actions).asPlainObject();