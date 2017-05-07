import callTrigger from '../indices/triggerIndex';

export class TriggerHandler {
  static triggerEvents(place, game) {
    return place.events && place.events.filter(event => callTrigger(event.trigger, game));
  }
}