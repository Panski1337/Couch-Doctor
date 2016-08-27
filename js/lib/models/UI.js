export default class UI {
  text = [];
  actions = [];
  textCounter = 0;

  constructor(options = {}) {
    this.text = options.text || this.text;
    this.actions = options.actions || this.actions;
    this.textCounter = options.textCounter || this.textCounter;
  }

  asPlainObject() {
    return {
      text: this.text,
      actions: this.actions.map(action => action.asPlainObject()),
      textCounter: this.textCounter
    }
  }
}