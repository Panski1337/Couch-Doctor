import UI from "../../../models/UI";
import t from "../../../../lang/Translate";
import Action from "../../../models/Action";

export const officeUI = new UI({
  text: t("scenes.office.intro.text"),
  actions: [
    new Action({
      text: t('scenes.office.intro.actions.choice1'),
      scene: 'office.intro',
      dispatches: []
    }),
    new Action({
      text: t('scenes.office.intro.actions.choice2'),
      scene: 'office.intro2',
      dispatches: []
    })
  ]
});