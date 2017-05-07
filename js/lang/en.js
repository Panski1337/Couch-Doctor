import {HOUSE_FRONT} from "../constants/Places";

const entrance = {
  title: 'Entrance',
  text: ['This is the entrance area. You can see a fireplace.']
};

const kitchen = {
  title: 'Kitchen',
  text: ['']
};

const livingRoom = {
  title: 'Living Room',
  text: ['']
};

const pool = {
  title: 'Pool',
  text: ['You can see a barbecue grill next to the pool.']
};

const events = {
  houseFront: {
    neighbourGreetings: {
      text: ["Your hot neighbour is greeting you!"],
      actions: {
        sexist: {
          text: 'Hey! Looking really hot, babe!'
        },
        normal: {
          text: 'Hey! How are you doing?'
        }
      }
    }
  }
};

export const EN = {
  default: {
    place: HOUSE_FRONT
  },
  general: {
    skip: 'skip',
    back: 'back'
  },
  events,
  scenes: {
    office: {
      intro: {
        title: "Office",
        text: [
          'This is my office. I am a so called "couch doctor". Its not much but I make my living out of it.',
          'The office is placed in my house that I inherited from my parents. I live here with my wife and my stepdaughter.',
          "My Wife is much younger than me and an arrogant bitch. But to be honest I didn't married her because of her character.",
          "The sex was always good but since we married everything changed. Can't remember when I saw her the last time naked.",
          "Her daughter is even worse. She is a feisty little brat that is always greedy and ungrateful. But good the good looks from her Mother.",
          "She turned 18 recently and now even her mother can't control her now. I hope she moves out soon.",
          "Damn my life sucks right now. And I have no idea of how to improve it..."
        ],
        actions: {
          choice1: 'Again',
          choice2: 'Go on'
        }
      },
      intro2: {
        title: "Office",
        text: [
          'Yeah!'
        ]
      }
    },
  },
  places: {
    house: {
      houseFront: {
        title: 'House Front',
        text: ['This is my house.', 'second text', 'third text'],
        actions: {
          checkMail: {
            text: 'Check the mail'
          }
        }
      },
      entrance1: entrance,
      entrance2: entrance,
      entrance3: entrance,
      bathroom1: {
        title: 'Master Bathroom',
        text: ['']
      },
      bathroom2: {
        title: 'Stepdaughters Bathroom',
        text: ['']
      },
      kitchen1: kitchen,
      kitchen2: kitchen,
      kitchen3: kitchen,
      livingRoom1: livingRoom,
      livingRoom2: livingRoom,
      bedroom1: {
        title: 'Master Bedroom',
        text: ['']
      },
      bedroom2: {
        title: 'Stepdaughters Bedroom',
        text: ['']
      },
      diningRoom: {
        title: 'Dining Room',
        text: ['']
      },
      pool1: pool,
      pool2: pool,
      pool3: pool,
      office: {
        title: 'Office',
        text: ['']
      },
      washingRoom: {
        title: 'Washing Room',
        text: ['']
      },
      toilet: {
        title: 'Guest Toilet',
        text: ['']
      },
      poolhouse: {
        title: 'Poolhouse',
        text: ['']
      }
    }
  },
  characters: {
    stats: {
      dominance: {
        name: 'dominance'
      },
      hypnosis: {
        name: 'hypnosis'
      },
      charisma: {
        name: 'charisma'
      },
      persuasion: {
        name: 'persuasion'
      },
      reputation: {
        name: 'reputation'
      },
      corruption: {
        name: 'corruption'
      },
      submissive: {
        name: 'submissive'
      },
      selfEsteem: {
        name: 'self esteem'
      },
      affection: {
        name: 'affection'
      },
      inhibition: {
        name: 'inhibition'
      }
    },
    protagonist: {
      defaultFirstName: "Thomas",
      defaultSurname: "Lewis"
    },
    women: {
      wife: {
        defaultFirstName: "Karen",
        defaultSurname: "Lewis"
      },
      stepDaughter: {
        defaultFirstName: "Jennifer",
        defaultSurname: "Taylor"
      }
    }
  },
  ingameMenu: {
    open: "Menu",
    close: "Back To Game",
    restart: "New Game"
  },
  saveMenu: {
    open: "Save",
    close: "Close",
    emptySave: "Empty",
    save: "Save",
    removeSave: "Delete"
  },
  loadMenu: {
    open: "Load",
    close: "Close",
    load: "Load",
    emptySave: "Empty"
  },
  optionsMenu: {
    open: "Options",
    close: "Close",
    on: "On",
    off: "Off"
  },
  options: {
    persistOptions: {
      label: "Persist Options"
    }
  },
  actionBar: {
    open: "Show Actions",
    close: "Hide Actions"
  }
};
