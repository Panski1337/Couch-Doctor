import * as TriggerTypes from "../../../js/constants/TriggerTypes";
import * as triggers from '../triggers';

const triggerIndex = {};

triggerIndex[TriggerTypes.FLAG_IS_TRUE] = triggers.flagIsTrue;
triggerIndex[TriggerTypes.FLAG_IS_FALSE] = triggers.flagIsFalse;

export default function callTrigger(trigger, game) {
  return triggerIndex[trigger.type](trigger.payload, game)
}