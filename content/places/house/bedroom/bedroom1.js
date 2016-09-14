import Place from "../../../../js/lib/models/Place";
import Action from "../../../../js/lib/models/Action";
import imageUrl from '../../../../img/house/bedroom2.jpg';
import * as Places from "../../../../js/constants/Places";

const places = [
  Places.BATHROOM_1,
  Places.LIVING_ROOM_1
];

const actions = [
];

export default new Place(Places.BEDROOM_1, imageUrl, places, actions).asPlainObject();