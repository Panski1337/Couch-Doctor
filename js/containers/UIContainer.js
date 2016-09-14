import '../../css/ui.css';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as UIActions from '../actions/UIActions';
import t from "../lang/Translate";

export class UIContainer extends Component {
  static propTypes = {
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    textCounter: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(PropTypes.object).isRequired,
    events: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.arrayOf(PropTypes.string).isRequired,
      textCounter: PropTypes.number.isRequired,
      actions: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        dispatches: PropTypes.arrayOf(PropTypes.object),
        place: PropTypes.string
      })).isRequired
    })),
    navigateText: PropTypes.func.isRequired,
    performAction: PropTypes.func.isRequired
  };

  renderAction(action, index) {
    return <div key={index} className="action" onClick={() => this.props.performAction(action)}>{action.text}</div>
  }

  render() {
    const events = this.props.events;
    const isEvent = events && events.length > 0;
    const {text, actions, textCounter} = isEvent ? this.props.events[0] : this.props;
    const hasNext = textCounter - 1 > 0;
    const hasBefore = text.length >= textCounter + 1;

    return (
      <div className="full-width ui">
        <div className="text-navigation">
          <span onClick={() => hasNext && this.props.navigateText(1, isEvent)}
                className={["noselect", "skip", !hasNext ? 'disabled' : ''].join(' ')}>
            {t('general.skip')}
          </span>
          <span onClick={() => hasBefore && this.props.navigateText(textCounter + 1, isEvent)}
                className={["noselect", "back", !hasBefore ? 'disabled' : ''].join(' ')}>
            {t('general.back')}
          </span>
        </div>
        <div className={["text", "noselect", hasNext ? 'has-next' : ''].join(' ')}>
          <span onClick={() => hasNext && this.props.navigateText(textCounter - 1, isEvent)}>
            {text[text.length - textCounter]}
          </span>
        </div>
        {actions && actions.length > 0 && !hasNext && <div className="actions noselect">
          {actions.map(this.renderAction.bind(this))}
        </div>}
      </div>
    )
  }
}

export default connect(state => {
  return {
    text: state.view.place.text,
    textCounter: state.view.place.textCounter,
    actions: state.view.place.actions,
    events: state.view.events
  }
}, {
  navigateText: UIActions.navigateText,
  performAction: UIActions.performAction
})(UIContainer)