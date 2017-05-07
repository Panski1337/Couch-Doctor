import '../../../css/containers/menus/menu.scss';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as IngameMenuActions from '../../actions/ui/menus/IngameMenuActions';
import t from "../../lang/Translate";
import LoadMenu from './LoadMenu';
import SaveMenu from './SaveMenu';
import OptionsMenu from './OptionsMenu';


export class IngameMenu extends Component {
  render() {
    const {isVisible, openIngameMenu, closeIngameMenu, restart} = this.props;
    if (isVisible) {
      return (
        <div>
          <div className="menu menu--open__overlay" onClick={closeIngameMenu}></div>
          <div className="menu menu--open">
            <LoadMenu />
            <SaveMenu />
            <OptionsMenu />
            <a className="menu__link menu__link--listed" onClick={restart}>{t('ingameMenu.restart')}</a>
            <a className="menu__link menu__link--listed" onClick={closeIngameMenu}>{t('ingameMenu.close')}</a>
          </div>
        </div>
      )
    } else {
      return <div className="menu menu__opener">
        <a className="menu__opener__link" onClick={openIngameMenu}>
          <span className="glyphicon glyphicon-menu-hamburger menu__opener__link__symbol" aria-hidden="true"/>
          <span className="only-desktop">{t('ingameMenu.open')}</span>
        </a>
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
    isVisible: state.ui.menus.ingame.isVisible
  }
}, {
  closeIngameMenu: IngameMenuActions.closeIngameMenu,
  openIngameMenu: IngameMenuActions.openIngameMenu,
  restart: IngameMenuActions.restart
})(IngameMenu)