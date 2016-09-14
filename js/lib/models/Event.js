import t from "../../lang/Translate";

export default class Event {
  trigger = () => false;
  text = [];
  actions = [];
  textCounter = 0;

  constructor(context, name, actions = [], trigger = () => false) {
    this.text = t(["events", context, name, "text"].join('.'));
    this.actions = actions;
    this.textCounter = this.text.length;
    this.trigger = trigger;
  }

  asPlainObject() {
    return {
      trigger: this.trigger,
      text: this.text,
      actions: this.actions,
      textCounter: this.textCounter
    }
  }
}