import Screen from './Screen'

export default class Action {
  text = '';
  screen = new Screen();
  dispatches = [];

  constructor(options = {}) {
    this.text = options.text || this.text;
    this.screen = options.screen || this.screen;
    this.dispatches = options.dispatches || this.dispatches;
  }

  asPlainObject() {
    return {
      text: this.text,
      screen: this.screen,
      dispatches: this.dispatches
    }
  }
}