export default class View {
  title = 'default title';
  backgroundImage = '';
  places = [];



  constructor(options = {}) {
    this.backgroundImage = options.backgroundImage || this.backgroundImage;
    this.places = options.places || this.places;
    this.title = options.title || this.title;
  }

  asPlainObject() {
    return {
      backgroundImage: this.backgroundImage,
      places: this.places.map(place => place.asPlainObject()),
      title: this.title
    }
  }
}