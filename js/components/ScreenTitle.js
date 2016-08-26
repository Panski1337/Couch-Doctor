import '../../css/screen.css';
import React, {Component, PropTypes} from "react";

export default class ScreenTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="full-width screen-title-wrapper">
        <h1 className="screen-title">{this.props.title}</h1>
      </div>
    )
  }
}