export default class View {
  backgroundImage = '';
  places = [];



  constructor(options = {}) {
    this.backgroundImage = options.backgroundImage || this.backgroundImage;
    this.places = options.places || this.places;
  }

  asPlainObject() {
    return {
      backgroundImage: this.backgroundImage,
      places: this.places
    }
  }
}