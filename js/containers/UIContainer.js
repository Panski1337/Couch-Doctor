import '../../css/ui.css';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as UIActions from '../actions/UIActions';

export class UIContainer extends Component {
  static propTypes = {
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    textCounter: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateUI: PropTypes.func.isRequired,
    performAction: PropTypes.func.isRequired
  };

  renderAction(action, index) {
    return <div key={index} className="action" onClick={() => this.props.performAction(action)}>{action.text}</div>
  }

  update(options) {
    const {text, textCounter, actions, updateUI} = this.props;
    updateUI({
      text: options.text || text,
      textCounter: options.textCounter || textCounter,
      actions: options.actions || actions
    })
  }

  updateTextCounter() {
    let textCounter = this.props.textCounter;
    if (textCounter + 1 < this.props.text.length)  this.update({textCounter: textCounter + 1})
  }

  render() {
    const {text, actions, textCounter} = this.props;
    return (
      <div className="full-width ui">
        <div className="text">
          <span onClick={this.updateTextCounter.bind(this)}>{text[textCounter]}</span>
        </div>
        <div className="actions">
          {actions && text.length === textCounter + 1 && actions.map(this.renderAction.bind(this))}
        </div>
      </div>
    )
  }
}

export default connect(state => state.ui, {
  updateUI: UIActions.updateUI,
  performAction: UIActions.performAction
})(UIContainer)