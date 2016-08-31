import Woman from '../../models/Woman';
import getName from "../../indices/nameIndex";

export const stepDaughter = new Woman({
  firstName: getName('women.stepDaughter.firstName'),
  surname: getName('women.stepDaughter.firstName'),
  stats: {
    submissive: {
      value: 20
    },
    selfEsteem: {
      value: 90
    },
    charisma: {
      value: 50
    },
    affection: {
      value: 30
    },
    inhibition: {
      value: 80
    },
    corruption: {
      value: 0
    }
  }
}).asPlainObject();