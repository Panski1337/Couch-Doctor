import t from "../../lang/Translate";

export default class Menu {
  title = t('default.menu.title');
  items = [];

  constructor(title, items = []) {
    this.title = title;
    this.items = items;
  }

  asPlainObject() {
    return {
      title: this.title,
      items: this.items
    }
  }
}