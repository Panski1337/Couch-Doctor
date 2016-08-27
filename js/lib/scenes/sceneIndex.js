import {officeScene} from './office/intro/OfficeIntroScene';
import {officeScene2} from './office/intro2/OfficeIntro2Scene';

const sceneIndex = {
  office: {
    intro: officeScene,
    intro2: officeScene2
  }
};

export default function getScene(key) {
  try {
    return key.split('.').reduce((scene, keyPart) => scene[keyPart], sceneIndex)
  } catch (e) {
    console.error('scene not found for key: ' + key);
    return null
  }
}