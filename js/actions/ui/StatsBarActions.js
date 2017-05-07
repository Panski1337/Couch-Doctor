import * as ActionTypes from '../../constants/ActionTypes/ui/StatsBarAT';

export function closeStatsBar() {
  return {type: ActionTypes.CLOSE_STATS_BAR}
}

export function openStatsBar() {
  return {type: ActionTypes.OPEN_STATS_BAR}
}