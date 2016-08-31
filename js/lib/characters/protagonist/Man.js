import getName from "../../indices/nameIndex";
import Protagonist from "../../models/Protagonist";

export const protagonist = new Protagonist({
  firstName: getName('protagonist.firstName'),
  surname: getName('protagonist.surname'),
  stats: {
    dominance: {
      value: 0
    },
    hypnosis: {
      value: 0
    },
    charisma: {
      value: 30
    },
    persuasion: {
      value: 25
    },
    reputation: {
      value: 5
    },
    corruption: {
      value: 10
    }
  },
  money: 2500
}).asPlainObject();