import React from "react";
import {Provider} from "react-redux";
import configureStore from "../store/configureStore";
import GameContainer from "./GameContainer";
import {setLanguage} from "../lang/Translate";
import '../../css/main.css';
import backgroundImage from '../../img/background.jpg'


const store = configureStore();
setLanguage('en');

export default React.createClass({
  render() {
    return (
      <div className="container">
        <link href="https://fonts.googleapis.com/css?family=Lobster|Open+Sans" rel="stylesheet" />
        <Provider store={store}>
          <GameContainer />
        </Provider>
      </div>
    );
  }
});
