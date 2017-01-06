import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import View from './ViewContainer';
import Toolbar from '../components/Toolbar';
import DataList from '../components/DataList';
import UI from './UIContainer';
import IngameMenu from './Menus/IngameMenu';

class GameContainer extends Component {
  static propTypes = {
    stats: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="game-container">
        <Toolbar className="header-toolbar">
          <DataList data={this.props.stats}/>
          <IngameMenu />
        </Toolbar>
        <div className="full-width screen">
          <View />
          <UI />
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return {stats: state.protagonist.stats}
})(GameContainer)
