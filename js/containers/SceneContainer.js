import '../../css/screen.css';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import SceneTitle from '../components/SceneTitle';
import View from './ViewContainer';
import UI from './UIContainer';

export class SceneContainer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    console.log(this.props)
    return (
      <div className="full-width screen">
        <SceneTitle title={this.props.title} />
        <View />
        <UI />
      </div>
    )
  }
}

export default connect(state => {
  return {title: state.screen.title}
}, {})(SceneContainer)