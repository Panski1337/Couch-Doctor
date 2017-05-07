import '../../../css/containers/menus/menu.scss';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import * as SaveMenuActions from '../../actions/ui/menus/SaveMenuActions';
import t from "../../lang/Translate";
import {isPresent} from "../../utils/stringHelper";


export class SaveMenu extends Component {
  constructor(props) {
    super(props);

    this.renderSave = this.renderSave.bind(this);
  }

  renderSave(saveGame, index) {
    const {save, removeSave} = this.props;

    if (saveGame && isPresent(saveGame.name)) {
      return <div key={index}>
        <a className="menu__submenu__link" onClick={() => save(index, null)}>{saveGame.name}</a>
        <a className="menu__submenu__link menu__submenu__link--right" onClick={() => removeSave(index)}>{t('saveMenu.removeSave')}</a>
      </div>
    } else {
      return <div key={index}>
        <a className="menu__submenu__link" onClick={() => save(index, null)}>{t('saveMenu.emptySave')}</a>
      </div>
    }
  }

  render() {
    const {isVisible, saves, openSaveMenu, closeSaveMenu} = this.props;
    if (isVisible) {
      return (
        <div>
          <a className="menu__link menu__link--listed" onClick={closeSaveMenu}>{t('saveMenu.close')}</a>
          <div className="menu menu__submenu">
            {saves.map(this.renderSave)}
          </div>
        </div>
      )
    } else {
      return <a className="menu__link menu__link--listed" onClick={openSaveMenu}>{t('saveMenu.open')}</a>
    }
  }
}

SaveMenu.propTypes = {
  saves: PropTypes.arrayOf(PropTypes.object).isRequired,
  isVisible: PropTypes.bool.isRequired,
  openSaveMenu: PropTypes.func.isRequired,
  closeSaveMenu: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  removeSave: PropTypes.func.isRequired
};

export default connect(state => {

  return {
    saves: state.saves,
    isVisible: state.ui.menus.save.isVisible
  }
}, {
  openSaveMenu: SaveMenuActions.openSaveMenu,
  closeSaveMenu: SaveMenuActions.closeSaveMenu,
  save: SaveMenuActions.save,
  removeSave: SaveMenuActions.removeSave
})(SaveMenu)