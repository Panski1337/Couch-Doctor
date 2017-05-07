import * as StatsBarAT from '../../constants/ActionTypes/ui/StatsBarAT';

const defaultStatsBar = {isVisible: false};

export default function (state = defaultStatsBar, action) {
  switch (action.type) {
    case StatsBarAT.OPEN_STATS_BAR:
      return Object.assign({}, state, {isVisible: true});
    case StatsBarAT.CLOSE_STATS_BAR:
      return Object.assign({}, state, {isVisible: false});
    default:
      return state;
  }
}