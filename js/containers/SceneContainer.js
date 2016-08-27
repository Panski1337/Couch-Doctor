import '../../css/screen.css';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import View from './ViewContainer';
import UI from './UIContainer';

export class SceneContainer extends Component {

  render() {
    return (
      <div className="full-width screen">
        <View />
        <UI />
      </div>
    )
  }
}

export default connect(state => state, {})(SceneContainer)