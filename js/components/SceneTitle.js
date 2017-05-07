import '../../css/compontents/scene-title.scss';
import React, {Component, PropTypes} from "react";

export default class SceneTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <span className="screen-title">
        <h1 className="screen-title__text">{this.props.title}</h1>
      </span>
    )
  }
}