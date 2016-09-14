import Place from "../../../js/lib/models/Place";
import Action from "../../../js/lib/models/Action";
import imageUrl from '../../../img/house/_pool4.jpg';
import * as Places from "../../../js/constants/Places";

const places = [
  Places.POOL_3
];

const actions = [
];

export default new Place(Places.POOLHOUSE, imageUrl, places, actions).asPlainObject();