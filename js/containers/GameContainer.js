import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Screen from '../components/ScreenComp';
import * as UIActions from '../actions/UIActions';

class GameContainer extends Component {
  static propTypes = {
    screen: PropTypes.shape({
      title: PropTypes.string.isRequired,
      view: PropTypes.shape({
        backgroundImage: PropTypes.string.isRequired,
        places: PropTypes.arrayOf(PropTypes.object).isRequired
      }).isRequired,
      ui: PropTypes.shape({
        text: PropTypes.arrayOf(PropTypes.string).isRequired,
        textCounter: PropTypes.number.isRequired,
        actions: PropTypes.arrayOf(PropTypes.object).isRequired
      }).isRequired
    }).isRequired,
    updateUI: PropTypes.func.isRequired,
    performAction: PropTypes.func.isRequired
  };

  render() {
    const {screen, updateUI, performAction} = this.props;
    return (
      <div className="game-container">
        <Screen {...Object.assign(screen, {updateUI, performAction})} />
      </div>
    )
  }
}

export default connect(state => state, {
  updateUI: UIActions.updateUI,
  performAction: UIActions.performAction
})(GameContainer)
