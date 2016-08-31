import t from "../../lang/Translate";

const nameIndex = {
  protagonist: {
    firstName: t('characters.protagonist.defaultFirstName'),
    surname: t('characters.protagonist.defaultSurname')
  },
  women: {
    wife: {
      firstName: t('characters.women.wife.defaultFirstName'),
      surname: t('characters.women.wife.defaultSurname')
      
    },
    stepDaughter: {
      firstName: t('characters.women.stepDaughter.defaultFirstName'),
      surname: t('characters.women.stepDaughter.defaultSurname')
    }
  }
};

export default function getName(key) {
  try {
    return key.split('.').reduce((name, keyPart) => name[keyPart], nameIndex)
  } catch (e) {
    console.error('name not found for key: ' + key);
    return null
  }
}