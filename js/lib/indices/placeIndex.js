import * as Places from "../../constants/Places";
import houseFront from "../../../content/places/house/houseFront";
import entrance3 from "../../../content/places/house/entrance/entrance3";
import entrance1 from "../../../content/places/house/entrance/entrance1";
import entrance2 from "../../../content/places/house/entrance/entrance2";
import livingRoom1 from "../../../content/places/house/livingRoom/livingRoom1";
import livingRoom2 from "../../../content/places/house/livingRoom/livingRoom2";
import kitchen1 from "../../../content/places/house/kitchen/kitchen1";
import kitchen2 from "../../../content/places/house/kitchen/kitchen2";
import kitchen3 from "../../../content/places/house/kitchen/kitchen3";
import bedroom1 from "../../../content/places/house/bedroom/bedroom1";
import bedroom2 from "../../../content/places/house/bedroom/bedroom2";
import office from "../../../content/places/house/office";
import bathroom1 from "../../../content/places/house/bathroom/bathroom1";
import bathroom2 from "../../../content/places/house/bathroom/bathroom2";
import pool1 from "../../../content/places/house/pool/pool1";
import pool2 from "../../../content/places/house/pool/pool2";
import pool3 from "../../../content/places/house/pool/pool3";
import poolhouse from "../../../content/places/house/poolhouse";
import toilet from "../../../content/places/house/toilet";
import washingRoom from "../../../content/places/house/washingRoom";
import diningRoom from "../../../content/places/house/diningRoom";

const placeIndex = {};

placeIndex[Places.HOUSE_FRONT] = houseFront;
placeIndex[Places.ENTRANCE_1] = entrance1;
placeIndex[Places.ENTRANCE_2] = entrance2;
placeIndex[Places.ENTRANCE_3] = entrance3;
placeIndex[Places.LIVING_ROOM_1] = livingRoom1;
placeIndex[Places.LIVING_ROOM_2] = livingRoom2;
placeIndex[Places.KITCHEN_1] = kitchen1;
placeIndex[Places.KITCHEN_2] = kitchen2;
placeIndex[Places.KITCHEN_3] = kitchen3;
placeIndex[Places.BEDROOM_1] = bedroom1;
placeIndex[Places.BEDROOM_2] = bedroom2;
placeIndex[Places.OFFICE] = office;
placeIndex[Places.BATHROOM_1] = bathroom1;
placeIndex[Places.BATHROOM_2] = bathroom2;
placeIndex[Places.POOL_1] = pool1;
placeIndex[Places.POOL_2] = pool2;
placeIndex[Places.POOL_3] = pool3;
placeIndex[Places.POOLHOUSE] = poolhouse;
placeIndex[Places.TOILET] = toilet;
placeIndex[Places.WASHING_ROOM] = washingRoom;
placeIndex[Places.DINING_ROOM] = diningRoom;


export default function getPlace(key) {
  return placeIndex[key] || console.error('place not found for key: ' + key);
}