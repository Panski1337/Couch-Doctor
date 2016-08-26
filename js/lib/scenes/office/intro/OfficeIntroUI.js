import UI from "../../../models/UI";
import t from "../../../../lang/Translate";
import Action from "../../../models/Action";
import {officeScreen} from './OfficeIntroScreen';
import {officeScreen2} from '../intro2/OfficeIntro2Screen';

console.log(officeScreen);
export const officeUI = new UI({
  text: t("scenes.office.intro.text"),
  actions: [
    new Action({
      text: t('scenes.office.intro.actions.choice1'),
      screen: 'office.intro',
      dispatches: []
    }).asPlainObject(),
    new Action({
      text: t('scenes.office.intro.actions.choice2'),
      screen: 'office.intro2',
      dispatches: []
    }).asPlainObject()
  ]
});