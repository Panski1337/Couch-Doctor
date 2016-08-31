import t from "../../../../lang/Translate";
import Scene from '../../../models/Scene'
import View from '../../../models/View';
import UI from '../../../models/UI';
import Action from '../../../models/Action';
import backgroundImage from '../../../../../img/rooms/office.jpg';
import * as ActionTypes from "../../../../constants/ActionTypes";

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
        dispatches: [
          {type: ActionTypes.RAISE_STATS, stats: {dominance: {value: 10}}},
          {type: ActionTypes.LOWER_STATS, stats: {charisma: {value: 10}}},
          {type: ActionTypes.WOMAN_RAISE_STATS, character: 'wife', stats: {submissive: {value: 10}}},
          {type: ActionTypes.WOMAN_LOWER_STATS, character: 'wife', stats: {inhibition: {value: 10}}}
        ]
      }),
      new Action({
        text: t('scenes.office.intro.actions.choice2'),
        scene: 'rooms.corridor',
        dispatches: []
      })
    ]
  })
}).asPlainObject();