import '../../../css/menu.scss';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as OptionsMenuActions from '../../actions/Menus/OptionsMenuActions';
import t from "../../lang/Translate";
import * as Constants from "../../constants/Constants";


export class OptionsMenu extends Component {
  constructor(props) {
    super(props);

    this.renderSelectOption = this.renderSelectOption.bind(this);
    this.renderBooleanOption = this.renderBooleanOption.bind(this);
  }

  renderOption(option, key, index) {
    switch (option.type) {
      case Constants.BOOLEAN_OPTION:
        return this.renderBooleanOption(option, key, index);
      case Constants.SELECT_OPTION:
        return this.renderSelectOption(option, key, index);
      default:
        return '';
    }
  }

  renderSelectOption(option, key, index) {
    const {changeOption} = this.props;
    const id = 'option' + index;

    return <div key={index}>
      <label htmlFor={id}>{option.label}</label>
      <select id={id} onChange={event => changeOption(key, option, event.target.value)}>
        {option.values.map((value, index) => this.renderSelectOption(value, index, option))}
      </select>
    </div>
  }

  renderSelectOption(value, index, option) {
    return <option key={index} selected={option.value === value} value={value}>{option.label}</option>
  }

  renderBooleanOption(option, key, index) {
    const {changeOption} = this.props;
    const id = 'option' + index;

    return <div key={index}>
      <label className="menu__submenu__link" htmlFor={id}>{option.label}</label>
      <a className="menu__submenu__link menu__submenu__link--right"
         onClick={event => changeOption(key, option, !option.value)}
         id={id}>
        {option.value ? t('optionsMenu.on') : t('optionsMenu.off')}
      </a>
    </div>
  }

  render() {
    const {isVisible, options, openOptionsMenu, closeOptionsMenu} = this.props;
    if (isVisible) {
      return (
        <div>
          {/*<a className="menu__link menu__link--listed" onClick={closeOptionsMenu}>{t('optionsMenu.close')}</a>*/}
          <div className="menu menu__submenu">
            {Object.keys(options).map((key, index) => this.renderOption(options[key], key, index))}
          </div>
        </div>
      )
    } else {
      return <a className="menu__link menu__link--listed" onClick={openOptionsMenu}>{t('optionsMenu.open')}</a>
    }
  }
}

OptionsMenu.propTypes = {
  options: PropTypes.shape({
    persistOptions: PropTypes.shape({
      type: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.bool.isRequired
    })
  }).isRequired,
  isVisible: PropTypes.bool.isRequired,
  changeOption: PropTypes.func.isRequired,
  openOptionsMenu: PropTypes.func.isRequired,
  closeOptionsMenu: PropTypes.func.isRequired
};

export default connect(state => {
  return {
    options: state.options,
    isVisible: state.menus.optionsMenu.isVisible
  }
}, {
  openOptionsMenu: OptionsMenuActions.openOptionsMenu,
  closeOptionsMenu: OptionsMenuActions.closeOptionsMenu,
  changeOption: OptionsMenuActions.changeOption
})(OptionsMenu)