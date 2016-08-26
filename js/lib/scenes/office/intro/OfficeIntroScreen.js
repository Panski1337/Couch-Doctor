import t from "../../../../lang/Translate";
import {officeUI} from "./OfficeIntroUI";
import {officeView} from "./OfficeIntroView";
import Screen from '../../../models/Screen'

export const officeScreen = new Screen({
  title: t("scenes.office.intro.title"),
  view: officeView,
  ui: officeUI
});