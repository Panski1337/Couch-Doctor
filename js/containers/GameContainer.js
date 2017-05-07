import React, {Component, PropTypes} from "react";
import '../../css/layout.scss'
import {connect} from "react-redux";
import View from './ViewContainer';
import UIContainer from './UIContainer';
import IngameMenu from './menus/IngameMenu';
import StatsBar from './ui/StatsBar';
import SceneTitle from '../components/SceneTitle';
import * as UIActions from "../actions/UIActions";
import {TriggerHandler} from "../lib/triggers/TriggerHandler";

export class GameContainer extends Component {

  render() {
    const {navigateEventText, navigatePlaceText, performAction, place, events} = this.props;
    const isEvent = events.length > 0;
    const {textCounter, text, actions} = isEvent ? events[0] : place;
    const hasNext = textCounter - 1 > 0;
    const hasBefore = text.length >= textCounter + 1;
    const hasActions = actions && actions.length > 0 && !hasNext;

    return (
      <div className="game">
        <div className="game__header">
          <StatsBar />
          <SceneTitle title={place.title}/>
          <IngameMenu />
        </div>
        <div className="game__content">
          <View isPlacesVisible={!isEvent && !hasNext} />
        </div>
        <div className="game__footer">
          <UIContainer navigateText={isEvent ? navigateEventText : navigatePlaceText}
                       scene={{textCounter, text, actions}}
                       hasNext={hasNext}
                       hasBefore={hasBefore}
                       hasActions={hasActions}
                       performAction={performAction}/>
        </div>
      </div>
    )
  }
}

GameContainer.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    textCounter: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      dispatches: PropTypes.arrayOf(PropTypes.object),
      place: PropTypes.string
    })).isRequired
  }).isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    textCounter: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      dispatches: PropTypes.arrayOf(PropTypes.object),
      place: PropTypes.string
    })).isRequired
  }).isRequired),
  navigateEventText: PropTypes.func.isRequired,
  navigatePlaceText: PropTypes.func.isRequired,
  performAction: PropTypes.func.isRequired
};

export default connect(state => {
  const place = state.view.place;
  return {
    place,
    events: TriggerHandler.triggerEvents(place, state.game)
  }
}, {
  navigateEventText: UIActions.navigateEventText,
  navigatePlaceText: UIActions.navigatePlaceText,
  performAction: UIActions.performAction
})(GameContainer)