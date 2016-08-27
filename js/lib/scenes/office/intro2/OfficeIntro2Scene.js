import t from "../../../../lang/Translate";
import {officeUI} from "./OfficeIntro2UI";
import {officeView} from "./OfficeIntro2View";
import Screen from '../../../models/Scene'

export const officeScene2 = new Screen({
  title: t("scenes.office.intro2.title"),
  view: officeView,
  ui: officeUI
}).asPlainObject();