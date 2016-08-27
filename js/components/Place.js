import '../../css/view.css';
import React, {Component, PropTypes} from "react";

export default class Place extends Component {
  static propTypes = {
    text:  PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
  };

  render() {
    const {text, handleClick} = this.props;
    return (
      <div className="place" onClick={handleClick}>
        <p>
          <span>{text}</span>
        </p>
      </div>
    )
  }
}