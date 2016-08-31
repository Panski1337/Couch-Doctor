import {officeIntro1} from './../scenes/office/intro/OfficeIntro1Scene';
import {officeIntro2} from './../scenes/office/intro/OfficeIntro2Scene';
import {corridor} from "./../scenes/rooms/Corridor";


const sceneIndex = {
  office: {
    officeIntro1,
    officeIntro2
  },
  rooms: {
    corridor
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