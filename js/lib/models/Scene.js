import View from "./View";
import UI from "./UI";
export default class Scene {
  view = new View();
  ui = new UI();
  
  
  constructor(options = {}) {
    this.view = options.view || this.view;
    this.ui = options.ui || this.ui;
  }
  
  asPlainObject() {
    return {
      view: this.view.asPlainObject(),
      ui: this.ui.asPlainObject()
    }
  }
}