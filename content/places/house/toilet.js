import Place from "../../../js/lib/models/Place";
import Action from "../../../js/lib/models/Action";
import imageUrl from '../../../img/house/_pool4.jpg';
import * as Places from "../../../js/constants/Places";

const places = [
  Places.KITCHEN_3
];

const actions = [
];

export default new Place(Places.TOILET, imageUrl, places, actions).asPlainObject();