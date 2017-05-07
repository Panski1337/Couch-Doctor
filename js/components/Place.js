import '../../css/containers/ui/places.scss';
import React, {Component, PropTypes} from "react";
import placeIndex from "../lib/indices/placeIndex";


export default class Place extends Component {
  static propTypes = {
    name:  PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
  };

  render() {
    const {name, handleClick} = this.props;
    const place = placeIndex(name);
    return (
      <div className="place" onClick={() => handleClick(place)}>
        <p>
          <span>{place.title}</span>
        </p>
      </div>
    )
  }
}