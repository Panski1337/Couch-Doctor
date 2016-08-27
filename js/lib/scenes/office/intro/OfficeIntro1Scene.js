import t from "../../../../lang/Translate";
import Scene from '../../../models/Scene'
import View from '../../../models/View';
import UI from '../../../models/UI';
import Action from '../../../models/Action';
import backgroundImage from '../../../../../img/rooms/office.jpg';

export const officeIntro1 = new Scene({
  view: new View({
    backgroundImage: backgroundImage,
    title: t("scenes.office.intro.title")
  }),
  ui: new UI({
    text: t("scenes.office.intro.text"),
    actions: [
      new Action({
        text: t('scenes.office.intro.actions.choice1'),
        scene: 'office.officeIntro2',
        dispatches: []
      }),
      new Action({
        text: t('scenes.office.intro.actions.choice2'),
        scene: 'rooms.corridor',
        dispatches: []
      })
    ]
  })
}).asPlainObject();