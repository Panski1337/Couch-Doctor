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
    title: t("scenes.rooms.corridor.title"),
    places: [
      new Place({
        text: t('places.office.title'),
        scene: 'office.officeIntro1'
      }),
      new Place({
        text: t('places.kitchen.title'),
        scene: 'office.officeIntro1'
      })
    ]
  }),
  ui: new UI({
    text: t('scenes.rooms.corridor.text'),
    actions: [
      new Action({
        text: t('scenes.rooms.corridor.actions.choice1'),
        scene: 'rooms.corridor',
        dispatches: []
      }),
      new Action({
        text: t('scenes.rooms.corridor.actions.choice2'),
        scene: 'rooms.corridor',
        dispatches: []
      })
    ]
  })
}).asPlainObject();