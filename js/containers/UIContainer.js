import '../../css/containers/ui.scss'
import React, {Component, PropTypes} from "react";
import TextNavigation from '../components/ui/TextNavigation';
import ActionBar from '../components/ui/ActionBar';
import DialogText from '../components/ui/DialogText';

export default class UIContainer extends Component {

  render() {
    const {scene, performAction, navigateText, hasNext, hasBefore, hasActions} =  this.props;
    const {text, actions, textCounter} = scene;

    return (
      <div className="ui">
        <TextNavigation isSkipClickEnabled={hasNext}
                        isBackClickEnabled={hasBefore}
                        handleSkipClick={() => hasNext && navigateText(1)}
                        handleBackClick={() => hasBefore && navigateText(textCounter + 1)}/>

        <DialogText handleClick={() => hasNext && navigateText(textCounter - 1)}
                    text={text[text.length - textCounter]}
                    isClickable={hasNext}/>

        {hasActions && <ActionBar actions={actions} handleClick={performAction}/>}
      </div>
    )
  }
}

UIContainer.propTypes = {
  hasNext: PropTypes.bool.isRequired,
  hasBefore: PropTypes.bool.isRequired,
  hasActions: PropTypes.bool.isRequired,
  scene: PropTypes.shape({
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    textCounter: PropTypes.number.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      dispatches: PropTypes.arrayOf(PropTypes.object),
      place: PropTypes.string
    })).isRequired
  }).isRequired,
  navigateText: PropTypes.func.isRequired,
  performAction: PropTypes.func.isRequired
};