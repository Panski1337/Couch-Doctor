import t from "../../lang/Translate";

export default class Action {
  text = '';
  place = t('default.place');
  dispatches = [];

  constructor(context, name, place, dispatches = []) {
    this.text = t([context, "actions", name, 'text'].join('.'));
    this.place = this.place || place;
    this.dispatches = dispatches;
  }

  asPlainObject() {
    return {
      text: this.text,
      place: this.place,
      dispatches: this.dispatches
    }
  }
}