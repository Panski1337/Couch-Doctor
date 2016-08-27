import Screen from './Scene'

export default class Place {
  text = '';
  scene = new Screen();

  constructor(options = {}) {
    this.text = options.text || this.text;
    this.scene = options.scene || this.scene;
  }

  asPlainObject() {
    return {
      text: this.text,
      scene: this.scene
    }
  }
}