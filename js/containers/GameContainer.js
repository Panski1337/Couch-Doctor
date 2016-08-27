import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Screen from 'SceneContainer';

class GameContainer extends Component {
  static render() {
    return (
      <div className="game-container">
        <Screen />
      </div>
    )
  }
}

export default connect()(GameContainer)
