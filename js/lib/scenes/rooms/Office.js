import t from "../../../lang/Translate";
import Scene from '../../models/Scene';
import UI from '../../models/UI';
import View from '../../models/View';
import Place from '../../models/Place';
import Action from "../../models/Action";
import backgroundImage from '../../../../img/rooms/bedroom.jpg'

export const office = new Scene({
  view: new View({
    backgroundImage: backgroundImage,
    title: t("places.office.title"),
    places: [
      new Place({
        text: t('places.corridor.title'),
        scene: 'rooms.corridor'
      })
    ]
  }),
  ui: new UI({
    text: t('places.office.text'),
    actions: []
  })
}).asPlainObject();