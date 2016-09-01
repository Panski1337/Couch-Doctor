import t from "../../../lang/Translate";
import Scene from '../../models/Scene';
import UI from '../../models/UI';
import View from '../../models/View';
import Place from '../../models/Place';
import Action from "../../models/Action";
import backgroundImage from '../../../../img/rooms/corridor.jpg'

export const corridor = new Scene({
  view: new View({
    backgroundImage: backgroundImage,
    title: t("places.corridor.title"),
    places: [
      new Place({
        text: t('places.bedroom.title'),
        scene: 'rooms.bedroom'
      }),
      new Place({
        text: t('places.office.title'),
        scene: 'rooms.office'
      })
    ]
  }),
  ui: new UI({
    text: t('places.corridor.text'),
    actions: [
      new Action({
        text: t('places.corridor.actions.choice1'),
        scene: 'rooms.corridor',
        dispatches: []
      }),
      new Action({
        text: t('places.corridor.actions.choice2'),
        scene: 'rooms.corridor',
        dispatches: []
      })
    ]
  })
}).asPlainObject();