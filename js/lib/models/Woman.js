import getName from "../indices/nameIndex";
import t from "../../lang/Translate";
import {combineStats} from "../../utils/characterHelper";

export default class Character {
  firstName = 'defaultFirstName';
  surname = 'defaultSurname';
  stats = {
    submissive: {
      name: t('characters.stats.submissive.name'),
      value: 0
    },
    selfEsteem: {
      name: t('characters.stats.selfEsteem.name'),
      value: 0
    },
    charisma: {
      name: t('characters.stats.charisma.name'),
      value: 0
    },
    affection: {
      name: t('characters.stats.affection.name'),
      value: 0
    },
    inhibition: {
      name: t('characters.stats.inhibition.name'),
      value: 0
    },
    corruption: {
      name: t('characters.stats.corruption.name'),
      value: 0
    }
  };

  constructor(options = {}) {
    this.firstName = options.firstName || this.firstName;
    this.surname = options.surname || this.surname;
    this.stats = combineStats(this.stats, options.stats, (a, b) => a + b);
  }

  asPlainObject() {
    return {
      firstName: this.firstName,
      surname: this.surname,
      stats: this.stats
    }
  }
}