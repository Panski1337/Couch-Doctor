import View from "./View";
import UI from "./UI";
export default class Screen {
  title = 'default title';
  view = new View();
  ui = new UI();
  
  
  constructor(options = {}) {
    this.title = options.title || this.title;
    this.view = options.view || this.view;
    this.ui = options.ui || this.ui;
  }
  
  asPlainObject() {
    return {
      title: this.title,
      view: this.view.asPlainObject(),
      ui: this.ui.asPlainObject()
    }
  }
}