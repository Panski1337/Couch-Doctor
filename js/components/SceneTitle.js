import '../../css/screen.css';
import React, {Component, PropTypes} from "react";

export default class SceneTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <span className="screen-title-wrapper">
        <h1 className="screen-title">{this.props.title}</h1>
      </span>
    )
  }
}