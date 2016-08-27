import Screen from './Scene'

export default class Action {
  text = '';
  scene = new Screen();
  dispatches = [];

  constructor(options = {}) {
    this.text = options.text || this.text;
    this.scene = options.scene || this.scene;
    this.dispatches = options.dispatches || this.dispatches;
  }

  asPlainObject() {
    return {
      text: this.text,
      scene: this.scene,
      dispatches: this.dispatches
    }
  }
}