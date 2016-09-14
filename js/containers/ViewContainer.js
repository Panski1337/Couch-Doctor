import '../../css/view.css';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import SceneTitle from '../components/SceneTitle';
import Place from '../components/Place';
import * as UIActions from '../actions/UIActions';


export class ViewContainer extends Component {
  static propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    places: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    changePlace: PropTypes.func.isRequired
  };

  renderPlace(place, index) {
    return <Place key={index}
                  handleClick={this.props.changePlace}
                  name={place}/>
  }

  render() {
    const {backgroundImage, title, places} = this.props;
    return (
      <div className="view-wrapper">
        <SceneTitle title={title}/>
        <div className="view">
          <img className="view-image" src={backgroundImage}/>
          <div className="places">
            {places && places.map(this.renderPlace.bind(this))}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => {
  return state.view.place
}, {
  changePlace: UIActions.changePlace
})(ViewContainer)