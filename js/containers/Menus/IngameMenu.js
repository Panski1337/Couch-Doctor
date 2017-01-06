import '../../../css/menu.scss';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as IngameMenuActions from '../../actions/Menus/IngameMenuActions';
import t from "../../lang/Translate";
import LoadMenu from './LoadMenu';
import SaveMenu from './SaveMenu';
import OptionsMenu from './OptionsMenu';


export class IngameMenu extends Component {
  render() {
    const {isVisible, openIngameMenu, closeIngameMenu, restart} = this.props;
    if (isVisible) {
      return (
        <div className="menu menu--open">
          <LoadMenu />
          <SaveMenu />
          <OptionsMenu />
          <a className="menu__link menu__link--listed" onClick={restart}>{t('ingameMenu.restart')}</a>
          <a className="menu__link menu__link--listed" onClick={closeIngameMenu}>{t('ingameMenu.close')}</a>
        </div>
      )
    } else {
      return <div className="menu">
        <a className="menu__link" onClick={openIngameMenu}>{t('ingameMenu.open')}</a>
      </div>
    }
  }
}

IngameMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeIngameMenu: PropTypes.func.isRequired,
  openIngameMenu: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired
};

export default connect(state => {
  return {
    isVisible: state.menus.ingameMenu.isVisible
  }
}, {
  closeIngameMenu: IngameMenuActions.closeIngameMenu,
  openIngameMenu: IngameMenuActions.openIngameMenu,
  restart: IngameMenuActions.restart
})(IngameMenu)