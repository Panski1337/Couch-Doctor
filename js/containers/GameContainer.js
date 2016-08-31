import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Screen from './SceneContainer';
import Toolbar from '../components/Toolbar';
import DataList from '../components/DataList';

class GameContainer extends Component {
  static propTypes = {
    stats: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="game-container">
        <Toolbar className="header-toolbar">
          <DataList data={this.props.stats}/>
        </Toolbar>
        <Screen />
      </div>
    )
  }
}

export default connect(state => {
  return {stats: state.protagonist.stats}
})(GameContainer)
