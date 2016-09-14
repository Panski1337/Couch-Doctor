import Place from "../../../js/lib/models/Place";
import Action from "../../../js/lib/models/Action";
import imageUrl from '../../../img/house/office.jpg';
import * as Places from "../../../js/constants/Places";

const places = [
  Places.ENTRANCE_3,
  Places.LIVING_ROOM_1,
  Places.BATHROOM_2,
  Places.BEDROOM_2
];

const actions = [
];

export default new Place(Places.OFFICE, imageUrl, places, actions).asPlainObject();