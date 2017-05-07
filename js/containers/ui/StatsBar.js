import '../../../css/containers/ui/stats-bar.scss';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import t from "../../lang/Translate";
import DataList from '../../components/DataList'
import * as StatsBarActions from '../../actions/ui/StatsBarActions'


export class StatsBar extends Component {
  render() {
    const {stats, isVisible, openStatsBar, closeStatsBar} = this.props;
    return (
        <div className="stats">
          <div className="stats__opener">
            <a className="stats--mobile stats__opener__link" onClick={openStatsBar}>
              <span className="glyphicon glyphicon-tasks stats__opener__link__symbol" aria-hidden="true"/>
            </a>
          </div>
          <div>
            <div className={"stats__menu stats--mobile--hidden"  + (isVisible ? ' stats--show' : '')}>
              <DataList data={stats}/>
            </div>
            <div className={"stats__overlay" + (isVisible ? ' stats--show' : 'stats--mobile')} onClick={closeStatsBar}></div>
          </div>
        </div>
    )
  }
}

StatsBar.propTypes = {
  stats: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  openStatsBar: PropTypes.func.isRequired,
  closeStatsBar: PropTypes.func.isRequired
};

export default connect(state => {
  return {
    stats: state.protagonist.stats,
    isVisible: state.ui.statsBar.isVisible
  }
}, {
  closeStatsBar: StatsBarActions.closeStatsBar,
  openStatsBar: StatsBarActions.openStatsBar,
})(StatsBar)