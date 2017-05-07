import '../../../css/compontents/ui/text-navigation.scss';
import React, {Component, PropTypes} from "react";
import t from "../../lang/Translate";

export default class TextNavigation extends Component {
  render() {
    const {isSkipClickEnabled, isBackClickEnabled, handleSkipClick, handleBackClick} = this.props;

    return (
      <div className="text-navigation">
          <span onClick={handleSkipClick}
                className={["text-navigation__skip", "noselect", isSkipClickEnabled ? '' : 'disabled'].join(' ')}>
            {t('general.skip')}
          </span>
        <span onClick={handleBackClick}
              className={["text-navigation__back", "noselect", isBackClickEnabled ? '' : 'disabled'].join(' ')}>
            {t('general.back')}
          </span>
      </div>
    )
  }
}

TextNavigation.propTypes = {
  isSkipClickEnabled: PropTypes.bool.isRequired,
  isBackClickEnabled: PropTypes.bool.isRequired,
  handleSkipClick: PropTypes.func.isRequired,
  handleBackClick: PropTypes.func.isRequired
};