import Action from "../../../../js/lib/models/Action";
import Event from "../../../../js/lib/models/Event";
import * as Events from "../../../../js/constants/Events";
import * as Places from "../../../../js/constants/Places";
import * as ActionTypes from "../../../../js/constants/ActionTypes";
import * as TriggerTypes from "../../../../js/constants/TriggerTypes";

const actions = [
  new Action(Events.NEIGHBOUR_GREETINGS, 'sexist', Places.HOUSE_FRONT, [
    {
      type: ActionTypes.CHANGE_FLAG,
      value: {
        houseFront: {
          firstTime: false
        }
      }
    },
    {
      type: ActionTypes.RAISE_STATS,
      stats: {
        dominance: {
          value: 1
        }
      }
    },
    {
      type: ActionTypes.LOWER_STATS,
      stats: {
        reputation: {
          value: 1
        }
      }
    }
  ]),
  new Action(Events.NEIGHBOUR_GREETINGS, 'normal', Places.HOUSE_FRONT, [
    {
      type: ActionTypes.CHANGE_FLAG,
      value: {
        houseFront: {
          firstTime: false
        }
      }
    },
    {
      type: ActionTypes.RAISE_STATS,
      stats: {
        reputation: {
          value: 1
        }
      }
    }
  ]),
];

const trigger = {
  type: TriggerTypes.FLAG_IS_TRUE,
  payload: 'houseFront.firstTime'
};

export default new Event('houseFront', 'neighbourGreetings', actions, trigger)