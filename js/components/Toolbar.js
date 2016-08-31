import '../../css/screen.css';
import React, {Component, PropTypes} from "react";

export default class Toolbar extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    )
  }
}