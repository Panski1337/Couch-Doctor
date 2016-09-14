import t from "../../lang/Translate";

export default class Place {
  title = 'TODO: needs a title';
  text = ['TODO: needs a text'];
  textCounter = 0;
  backgroundImage = '';
  places = [];
  actions = [];

  constructor(context, imageUrl, places = [], actions = []) {
    this.title = t([context, 'title'].join('.'));
    this.text = t([context, 'text'].join('.'));
    this.textCounter = this.text.length;
    this.backgroundImage = imageUrl;
    this.actions = actions;
    this.places = places;

  }

  asPlainObject() {
    return {
      title: this.title,
      text: this.text,
      textCounter: this.textCounter,
      backgroundImage: this.backgroundImage,
      places: this.places,
      actions: this.actions
    }
  }
}