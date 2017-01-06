import * as OptionsMenuAT from '../constants/ActionTypes/Menus/OptionsMenuAT';
import t from "../lang/Translate";
import * as Constants from "../constants/Constants";

const defaultOptions = {
  persistOptions: {
    type: Constants.BOOLEAN_OPTION,
    label: t('options.persistOptions.label'),
    value: false
  }
};

export default function (state = defaultOptions, action) {
  switch (action.type) {
    case OptionsMenuAT.CHANGE_OPTION:
      const assignee = {};
      assignee[action.key] = action.option;
      return Object.assign({}, state, assignee);
    default:
      return state;
  }
}

