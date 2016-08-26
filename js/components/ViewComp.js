import '../../css/view.css';
import React, {Component, PropTypes} from "react";


export default class View extends Component {
  static propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    places: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    const {backgroundImage, places} = this.props;
    return (
      <div className="view-wrapper">
        <div className="full-width view" style={{backgroundImage: 'url('+ backgroundImage + ')'}}>
          {places}
        </div>
      </div>
    )
  }
}