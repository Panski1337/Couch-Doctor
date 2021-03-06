import t from "../../lang/Translate";

export default class Place {
  title = 'TODO: needs a title';
  text = ['TODO: needs a text'];
  textCounter = 0;
  backgroundImage = '';
  places = [];
  actions = [];
  events = [];

  constructor(context, imageUrl, places = [], actions = [], events = []) {
    this.title = t([context, 'title'].join('.'));
    const text = t([context, 'text'].join('.'));
    this.text = Array.isArray(text) ? text : [text];
    this.textCounter = this.text.length;
    this.backgroundImage = imageUrl;
    this.actions = actions;
    this.places = places;
    this.events = events;
  }

  asPlainObject() {
    return {
      title: this.title,
      text: this.text,
      textCounter: this.textCounter,
      backgroundImage: this.backgroundImage,
      places: this.places,
      actions: this.actions,
      events: this.events
    }
  }
}