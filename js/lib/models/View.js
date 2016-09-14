import t from "../../lang/Translate";

export default class View {
  place = t('default.place');
  events = [];

  constructor(place, events = []) {
    this.place = place;
    this.events = events;
  }

  asPlainObject() {
    return {
      backgroundImage: this.backgroundImage,
      events: this.events
    }
  }
}