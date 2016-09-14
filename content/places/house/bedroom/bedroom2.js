import Place from "../../../../js/lib/models/Place";
import Action from "../../../../js/lib/models/Action";
import imageUrl from '../../../../img/house/bedroom2.jpg';
import * as Places from "../../../../js/constants/Places";

const places = [
  Places.ENTRANCE_3,
  Places.LIVING_ROOM_1,
  Places.BATHROOM_2,
  Places.OFFICE
];

const actions = [
];

export default new Place(Places.BEDROOM_2, imageUrl, places, actions).asPlainObject();