import t from "../../lang/Translate";
import {MALE} from "../../constants/Constants";
import {combineStats} from "../../utils/characterHelper";

export default class Protagonist {
  firstName = 'defaultFirstName';
  surname = 'defaultSurname';
  gender = MALE;
  stats = {
    dominance: {
      name: t('characters.stats.dominance.name'),
      value: 0
    },
    hypnosis: {
      name: t('characters.stats.hypnosis.name'),
      value: 0
    },
    charisma: {
      name: t('characters.stats.charisma.name'),
      value: 0
    },
    persuasion: {
      name: t('characters.stats.persuasion.name'),
      value: 0
    },
    reputation: {
      name: t('characters.stats.reputation.name'),
      value: 0
    },
    corruption: {
      name: t('characters.stats.corruption.name'),
      value: 0
    }
  };
  money = 0;

  constructor(options = {}) {
    this.firstName = options.firstName || this.firstName;
    this.surname = options.surname || this.surname;
    this.stats = combineStats(this.stats, options.stats, (a, b) => a + b);
    this.money = options.money || this.money;
    this.gender = options.gender || this.gender;
  }

  asPlainObject() {
    return {
      firstName: this.firstName,
      surname: this.surname,
      stats: this.stats,
      money: this.money,
      gender: this.gender
    }
  }
}