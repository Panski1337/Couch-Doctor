import t from "../../lang/Translate";

export default class Event {
  trigger = {};
  text = [];
  actions = [];
  textCounter = 0;

  constructor(context, name, actions = [], trigger) {
    const text = t(["events", context, name, "text"].join('.'));
    this.text = Array.isArray(text) ? text : [text];
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