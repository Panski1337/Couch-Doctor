import '../../../css/compontents/ui/dialog-text.scss';
import React, {Component, PropTypes} from "react";

export default class DialogText extends Component {
  render() {
    const {text, isClickable, handleClick} = this.props;

    return (
      <div className={["dialog-text", "noselect", isClickable ? 'has-next' : ''].join(' ')}>
          <span onClick={handleClick}>
          {text}
          </span>
      </div>
    )
  }
}

DialogText.propTypes = {
  text: PropTypes.string.isRequired,
  isClickable: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};