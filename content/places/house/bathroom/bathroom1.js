import Place from "../../../../js/lib/models/Place";
import Action from "../../../../js/lib/models/Action";
import imageUrl from '../../../../img/house/bathroom1.jpg';
import * as Places from "../../../../js/constants/Places";

const places = [
  Places.POOL_2,
  Places.BEDROOM_1
];

const actions = [
];

export default new Place(Places.BATHROOM_1, imageUrl, places, actions).asPlainObject();