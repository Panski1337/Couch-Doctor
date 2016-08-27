import t from "../../../../lang/Translate";
import Scene from '../../../models/Scene'
import View from '../../../models/View';
import UI from '../../../models/UI';
import Action from '../../../models/Action';
import backgroundImage from '../../../../../img/rooms/office.jpg';

export const officeIntro2 = new Scene({  
  view: new View({
    backgroundImage: backgroundImage,
    title: t("scenes.office.intro2.title"),
  }),
  ui: new UI({
    text: t("scenes.office.intro2.text"),
    actions: [

    ]
  })
}).asPlainObject();