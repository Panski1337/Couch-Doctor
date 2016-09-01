import t from "../../../lang/Translate";
import Scene from '../../models/Scene';
import UI from '../../models/UI';
import View from '../../models/View';
import Place from '../../models/Place';
import Action from "../../models/Action";
import backgroundImage from '../../../../img/rooms/wardrobe.jpg'

export const wardrobe = new Scene({
  view: new View({
    backgroundImage: backgroundImage,
    title: t("places.wardrobe.title"),
    places: [
      new Place({
        text: t('places.bedroom.title'),
        scene: 'rooms.bedroom'
      })
    ]
  }),
  ui: new UI({
    text: t('places.wardrobe.text'),
    actions: []
  })
}).asPlainObject();