import '../../../css/containers/menus/menu.scss';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as LoadMenuActions from '../../actions/ui/menus/LoadMenuActions';
import t from "../../lang/Translate";
import {isPresent} from "../../utils/stringHelper";


export class LoadMenu extends Component {
  constructor(props) {
    super(props);

    this.renderSave = this.renderSave.bind(this);
  }

  renderSave(saveGame, index) {
    const {load} = this.props;

    if (saveGame && isPresent(saveGame.name)) {
      return <div key={index}>
        <a className="menu__submenu__link" onClick={() => load(saveGame.save)}>{saveGame.name}</a>
      </div>
    } else {
      return <div key={index} >
        <span className="menu__submenu__link menu__submenu__link--disabled">{t('loadMenu.emptySave')}</span>
      </div>
    }
  }

  render() {
    const {isVisible, saves, openLoadMenu, closeLoadMenu} = this.props;
    if (isVisible) {
      return (
        <div>
          <a className="menu__link menu__link--listed" onClick={closeLoadMenu}>{t('loadMenu.close')}</a>
          <div className="menu menu__submenu">
          {saves.map(this.renderSave)}
          </div>
        </div>
      )
    } else {
      return <a className="menu__link menu__link--listed" onClick={openLoadMenu}>{t('loadMenu.open')}</a>
    }
  }
}

LoadMenu.propTypes = {
  saves: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    save: PropTypes.object
  })).isRequired,
  isVisible: PropTypes.bool.isRequired,
  openLoadMenu: PropTypes.func.isRequired,
  closeLoadMenu: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired
};

export default connect(state => {
  return {
    saves: state.saves,
    isVisible: state.ui.menus.load.isVisible
  }
}, {
  openLoadMenu: LoadMenuActions.openLoadMenu,
  closeLoadMenu: LoadMenuActions.closeLoadMenu,
  load: LoadMenuActions.load
})(LoadMenu)