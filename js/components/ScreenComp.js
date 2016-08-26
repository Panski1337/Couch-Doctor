import '../../css/screen.css';
import React, {Component, PropTypes} from "react";
import ScreenTitle from './ScreenTitle';
import View from './ViewComp';
import UI from './UIComp';

export default class Screen extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    view: PropTypes.shape({
      backgroundImage: PropTypes.string.isRequired,
      places: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired,
    ui: PropTypes.shape({
      text: PropTypes.arrayOf(PropTypes.string).isRequired,
      textCounter: PropTypes.number.isRequired,
      actions: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired,
    updateUI: PropTypes.func.isRequired,
    performAction: PropTypes.func.isRequired
  };

  render() {
    console.log(this.props);
    const {title, view, ui, updateUI, performAction} = this.props;
    return (
      <div className="full-width screen">
        <ScreenTitle title={title} />
        <View {...view}/>
        <UI {...Object.assign(ui, {updateUI, performAction})}/>
      </div>
    )
  }
}